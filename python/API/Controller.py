from flask import Flask, jsonify, request
from flask_cors import CORS
from script import get_due_dates, create_calendar_events, extract_DOCX, extract_PDF
from middleware import require_authorization_header
import requests
import json

app = Flask("ToDue")
CORS(app)

ALLOWED_EXTENSIONS = {'pdf', 'docx'}

# check file extension.
def allowed_files(file_name):
    return '.' in file_name and file_name.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Defining oauth client to get tokens.
def grab_tokens(code):
    
    with open("config.json") as config_file:
        config = json.load(config_file)
        CLIENT_ID = config['CLIENT_ID']
        CLIENT_SECRET = config['CLIENT_SECRET']
        
    token_url = "https://accounts.google.com/o/oauth2/token"
    client_id = CLIENT_ID
    client_secret = CLIENT_SECRET

    payload = {
        "code": code,
        "client_id": client_id,
        "client_secret": client_secret,
        "redirect_uri": "http://localhost:3000",
        "grant_type": "authorization_code",
    }

    response = requests.post(token_url, data=payload)
    response_json = response.json()

    return response_json

# grab user info from token
def get_user_info(token):
        headers = {
            'Authorization': f'Bearer {token}',
            'Accept': 'application/json',
        }

        params = {
            'personFields': 'names,emailAddresses,photos',
        }

        url = 'https://people.googleapis.com/v1/people/me'
        response = requests.get(url, headers=headers, params=params)

        if response.status_code == 200:
            profile_data = response.json()
            return profile_data
        else:
            print(f"Failed to fetch profile: {response.status_code} - {response.text}")
            return None

access_token = None
# POST: login in user.
@app.route('/api/login', methods=["POST"])
def handleCode():
    if 'code' not in request.json:
        return jsonify({'error': 'no code found'}, 400)

    code = request.json['code']
    tokens = grab_tokens(code)
    global access_token
    access_token = tokens['access_token']
    id_token = tokens['id_token']
        
    return id_token

# GET: profile info.
@app.route('/api/profile', methods=["GET"])
@require_authorization_header
def GetProfileInfo():
    return get_user_info(access_token)

# POST: upload file to get course data to populate form.
@app.route('/api/uploadFile', methods=["POST"])
@require_authorization_header
def handleFileUpload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file selected'}, 400)
    
    file = request.files['file']
    course_data = {'course_name': 'Math 1550 Section 021', 'assignments': [{'name': 'Homework', 'due_date': 'Tuesday, February 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 1', 'due_date': 'Monday, February 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 2', 'due_date': 'Monday, March 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 3', 'due_date': 'Thursday, March 30th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 4', 'due_date': 'Tuesday, April 25th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Final Exam', 'due_date': 'Saturday, May 13th', 'start_time': '7:30 am', 'end_time': '9:30 am'}]}
    if file and allowed_files(file.filename):
        if file.filename.rsplit('.', 1)[1].lower() == 'pdf':
            pdfCourseData = get_due_dates(extract_PDF(file))
            return pdfCourseData
        elif file.filename.rsplit('.', 1)[1].lower() == 'docx':
            docxCourseData = get_due_dates(extract_DOCX(file))
            return docxCourseData
    else:
        return jsonify({'error': 'Invalid File Extension'}, 400)

# POST: updated form values up load to google calendar.
@app.route('/api/createEvents', methods=["POST"])
@require_authorization_header
def create_event():
    
    if 'course_data' not in request.json:
        return jsonify({'error': 'no course data found'}, 400)
    course_data = request.json["course_data"]
    year = request.json["year"]
    
    result = create_calendar_events(course_data, access_token, year)
    
    if result is not None:
        return jsonify({'Success': "Calendar updated"}, 200)
    else:
        return jsonify({'error': 'Error!'}, 400)    
    
@app.route('/api/test', methods=["GET"])
@require_authorization_header
def test():
    return jsonify({'message': 'hi'}, 200)
    
if __name__ == '__main__':
    app.run(debug=True)