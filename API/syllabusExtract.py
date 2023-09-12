import json
import PyPDF2
import docx2txt
import openai
import requests
import datetime
import os

# Functions

def extract_PDF(path):
    """
    Extracts pdf text from a file path.

    Args:
        path (string): specific file that user wants extracted.

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
        path (string): Specific file that user wants extracted

    Returns:
        _type_: extract docx text.
    """
    text = docx2txt.process(path)
    return text

def create_calendar_events(course_data, token, year):
    """
    puts dictionary from get_due_dates into correct event json format to write to google calendar.

    Args:
        syllabus_data (string): extract text to pass to get_due_dates.

    Returns:
        _type_: the resulting events created.
    """
    for assignment in course_data["assignments"]:
        startDateTime = convert_dates_and_times(assignment["due_date"], assignment["start_time"], year)
        endDateTime = convert_dates_and_times(assignment["due_date"], assignment["end_time"], year) 

        if startDateTime == "wrong format" or endDateTime == "wrong format":
            return "wrong format dates"
        else:
            event = {
                'summary': course_data['course_name'],
                'description': assignment['name'],
                'start': {
                    'dateTime': startDateTime,
                    'timeZone': 'America/New_York',
                },
                'end': {
                    'dateTime': endDateTime,
                    'timeZone': 'America/New_York',
                },
                'reminders': {
                    'useDefault': True,
                },
            }
             
            # To do:
            # make into try catch for request getting a 401 unauthorized error. 
            try:
                headers={
                    "Authorization": f"Bearer {token}",
                    "Content-Type": "application/json"
                }
        
                create_event_url = "https://www.googleapis.com/calendar/v3/calendars/primary/events"
                
                rep = requests.post(create_event_url, json=event, headers=headers)

                return course_data

            except Exception as e:
                return "Error making request: " + e
                

def convert_dates_and_times(due_date, time, yearNum):
    """
    Converts dates and times extracted from Syllabus to specific google calendar date and time format.

    Args:
        due_date (string): due date needed for event.
        time (string): time needed for event.
        year (string): specific year associated with class (user must input)

    Returns:
        _type_: returns due dates and times in correct google calendar format if due_data is not "Varies" and time is not "N/A".
    """
    
    if due_date == "Varies" or time == "N/A":
        return "wrong format"
    else:
        # Convert date string to to datetime object.
        date = datetime.datetime.strptime(due_date, "%Y-%m-%d")
        
        # Getting hour and minute from time.
        time_string = datetime.datetime.strptime(time, "%I:%M %p").time()
        
        # Setting the desired year, time, in correct google calendar event format.
        date_time = datetime.datetime.combine(date, time_string)
        date_time = date_time.replace(year=yearNum)
        
        return date_time.strftime("%Y-%m-%dT%H:%M:%S")

def correct_keys(data):
    course = {'course_name': None, 'assignments': None}
    test = []
    for keys in data:
        test.append(keys)
        
    course['course_name'] = data[test[0]]
    course['assignments'] = data[test[1]] 
    
    return course

def get_due_dates(syllabus_data):
    """
    Uses Openai api to get due dates, times, class, and assignments from text extracted from
    extract_DOCX or extract_PDF.

    Args:  
        syllabus_data (string): extracted text.

    Returns:
        _type_: returns a all course exam details in a dictionary format.
        
    """
    with open("config.json") as config_file:
        config = json.load(config_file)
        OPENAI_API_KEY = config['OPENAI_API_KEY']

    openai.api_key = OPENAI_API_KEY
    prompt = (
        'Please provide course exams in this format: '
        '{"course_name": "Course_Name", "assignments": [{"name": "name", "due_date": "year-month-day", "start_time": "08:30 AM", "end_time": "08:30 PM"}]} '
        'You can enter multiple course details in the same format." From the data ' + syllabus_data + '. '
        'Do not justify your answers. Do not give information not mentioned in the CONTEXT INFORMATION.'
    )    
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that provides course exam information."},
            {"role": "user", "content": prompt}
        ],
    )

    rep = response.choices[0].message["content"].strip()

    try:
        initialData = json.loads(rep)
        print(initialData)
        return initialData 
    except json.JSONDecodeError as e:
        print("Error decoding JSON:", e)