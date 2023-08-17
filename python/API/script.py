import json
import PyPDF2
import docx2txt
import openai
import requests
import datetime
import os

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

def create_calendar_events(course_data, token, year):
    """
    puts dictionary from get_due_dates into correact event json format to write to google calendar.

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
            
            headers={
                "Authorization": f"Bearer {token}",
                "Content-Type": "application/json"
            }
    
            create_event_url = "https://www.googleapis.com/calendar/v3/calendars/primary/events"
            
            requests.post(create_event_url, json=event, headers=headers)
                
    return course_data
 

def convert_dates_and_times(due_date, time, year):
    """
    Converts dates and times extracted from Syllabus to specfic google calendar date and time format.

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
    
    OPENAI_API_KEY = "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"
    
    openai.api_key = OPENAI_API_KEY
    response = openai.Completion.create(
        model='text-davinci-003',
         prompt = '"Please provide course exams in this format: {\"course_name\": \"Course_Name\", \"assignments\": [{\"name\": \"name\", \"due_date\": \"dueDate\", \"start_time\": \"startTime\", \"end_time\": \"endTime\"}]} You can enter multiple course details in the same format." From the data ' + syllabus_data + ". Do not justify your answers. Do not give information not mentioned in the CONTEXT INFORMATION.",
         max_tokens = 1200,
         n=1,
         stop=None,
         temperature = 0,
    )
    
    rep = response.choices[0].text.strip()
    
    start_pos = rep.index('{') # get response where { starts.
    course_data = {'course_name': 'Math 1550 Section 021', 'assignments': [{'name': 'Homework', 'due_date': 'Tuesday, February 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 1', 'due_date': 'Monday, February 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 2', 'due_date': 'Monday, March 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 3', 'due_date': 'Thursday, March 30th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 4', 'due_date': 'Tuesday, April 25th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Final Exam', 'due_date': 'Saturday, May 13th', 'start_time': '7:30 am', 'end_time': '9:30 am'}]}
    dictionary_str = rep[start_pos:]
    data = json.loads(dictionary_str)
    
    
    if set(data.keys()) == set(course_data.keys()):
        return data
    else:
        return correct_keys(data)
    