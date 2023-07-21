import os
import json
import PyPDF2
import docx2txt
import openai
import pickle
import os.path
import datetime
from googleapiclient.discovery import build
from google.oauth2 import service_account
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

SCOPES = ['https://www.googleapis.com/auth/calendar']
CREDENTIALS_FILE = 'credentials.json'

def get_calendar_service():
    """
    Authorizes User and asks them to allow access to their google calendar.
    
    Returns:
        type: returns the service used to write to the google calendar.
    
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                CREDENTIALS_FILE, SCOPES)
            creds = flow.run_local_server(port=0)

        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('calendar', 'v3', credentials=creds)
    return service

def extract_PDF(path):
    """
    Extracts pdf text from a file path.

    Args:
        path (string): specfic file that user wants extracted.

    Returns:
        _type_: extracted pdf text.
        
    """
    reader = PyPDF2.PdfReader(path)
    number_of_pages = len(reader.pages)
    extracted_text = ""
    for index in range(number_of_pages):
        page = reader.pages[index]
        text = page.extract_text()
        extracted_text += text
    
    return extracted_text
        
        
def extract_DOCX(path):
    """
    Extracts text from a Microsoft Docx file.

    Args:
        path (string): Specfic file that user wants extracted

    Returns:
        _type_: extract docx text.
    """
    text = docx2txt.process(path)
    return text

def get_due_dates(syllabus_data):
    """
    Uses Openai api to get due dates, times, class, and assignments from text extracted from
    extract_DOCX or extract_PDF.

    Args:
        syllabus_data (string): extracted text.

    Returns:
        _type_: returns a all course exam details in a dictionary format.
        
    """
    openai.api_key = 'API KEY'
    prompt = '''
            "Please provide the course exams in the following format: {\"course_name\": \"Course_Name\", \"assignments\": [{\"name\": \"name\", \"due_date\": \"dueDate\", \"start_time\": \"startTime\", \"end_time\": \"endTime\"}]} You can enter multiple course details in the same format. Press Enter without providing any input to finish entering the details."
            '''
    full_prompt = prompt + "From the data " + syllabus_data + "Do not justify your answers. Do not give information not mentioned in the CONTEXT INFORMATION."
    
    response = openai.Completion.create(
        model='text-davinci-003',
         prompt = full_prompt,
         max_tokens = 1200,
         n=1,
         stop=None,
         temperature = 0,
    )
    
    rep = response.choices[0].text.strip()
    
    start_pos = rep.index('{') # get response where { starts.

    # Extract the dictionary part
    dictionary_str = rep[start_pos:]
    
    return json.loads(dictionary_str)

def create_calendar_events(syllabus_data):
    """
    puts dictionary from get_due_dates into correact event json format to write to google calendar.

    Args:
        syllabus_data (string): extract text to pass to get_due_dates.

    Returns:
        _type_: the resulting events created.
    """
    service = get_calendar_service()
    # events = get_due_dates(syllabus_data)
    
    course_data = {'course_name': 'Math 1550 Section 021', 'assignments': [{'name': 'Homework', 'due_date': 'Tuesday, February 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 1', 'due_date': 'Monday, February 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 2', 'due_date': 'Monday, March 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 3', 'due_date': 'Thursday, March 30th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 4', 'due_date': 'Tuesday, April 25th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Final Exam', 'due_date': 'Saturday, May 13th', 'start_time': '7:30 am', 'end_time': '9:30 am'}]}
    
    events = []
    
    for assignment in course_data["assignments"]:
        startDateTime = convert_dates_and_times(assignment["due_date"], assignment["start_time"], 2023)
        endDateTiem = convert_dates_and_times(assignment["due_date"], assignment["end_time"], 2023) 

        if startDateTime == "wrong format" or endDateTiem == "wrong format":
            return "wrong format dates"
        else:
            event = {
                'summary': course_data['course_name'],
                'description': assignment['name'],
                'start': {
                    'dateTime': startDateTime,
                    'timeZone': 'America/New_York', # Eastern Standard Time
                },
                'end': {
                    'dateTime': endDateTiem,
                    'timeZone': 'America/New_York',
                },
                'reminders': {
                    'useDefault': True,
                },
            }
    
            # Creates a new event from the dates supplied by the get_due_date function.
            # event_result = service.events().insert(calendarId='primary', body=event).execute()
                
            events.append(event)
    return events

course_data = {'course_name': 'Math 1550 Section 021', 'assignments': [{'name': 'Homework', 'due_date': 'Varies', 'start_time': 'N/A', 'end_time': 'N/A'}, {'name': 'Exam 1', 'due_date': 'Monday, February 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 2', 'due_date': 'Monday, March 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 3', 'due_date': 'Thursday, March 30th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 4', 'due_date': 'Tuesday, April 25th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Final Exam', 'due_date': 'Saturday, May 13th', 'start_time': '7:30 am', 'end_time': '9:30 am'}]}

def convert_dates_and_times(due_date, time, year):
    """
    Converts dates and times extracted from Syllabus to specfic google calener date and time format.

    Args:
        due_date (string): due date needed for event.
        time (string): time needed for event.
        year (string): specfic year associated with class (user must input)

    Returns:
        _type_: returns due dates and times in correct google calendar format if due_data is not "Varies" and time is not "N/A".
    """
    
    if due_date == "Varies" or time == "N/A":
        return "wrong format"
    else:
        # Convert date string to to datetime object.
        date = datetime.datetime.strptime(due_date, "%A, %B %dth")
        
        # Getting hour and minute from time.
        time_string = datetime.datetime.strptime(time, "%I:%M %p").time()
        
        # Setting the desired year, time, in correct google calendar event format.
        date_time = datetime.datetime.combine(date, time_string)
        date_time = date_time.replace(year=year)
        
        return date_time.strftime("%Y-%m-%dT%H:%M:%S")
    
print(create_calendar_events(extract_DOCX("Syllabus_Homan (4).docx")))