from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import json
from script import get_due_dates, extract_DOCX, extract_PDF

app = Flask("ToDue")
CORS(app)

ALLOWED_EXTENSIONS = {'pdf', 'docx'}

def allowed_files(file_name):
    return '.' in file_name and file_name.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Defining oauth client to get tokens.
def grab_tokens(code):
    
    with open("config.json") as config_file:
        config = json.load(config_file)
        CLIENT_ID = config['CLIENT_ID']
        CLIENT_SECRET = config['CLIENT_SECRET']
        
    token_url = "https://oauth2.googleapis.com/token"
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

    access_token = response_json.get('access_token')
    
    return access_token

token = None
# GET: get tokens from google oauth.
@app.route('/code', methods=["POST"])
def handleCode():
    if 'code' not in request.json:
        return jsonify({'error': 'no code found'}, 400)
    
    code = request.json['code']
    global token
    token = grab_tokens(code)
    
    return jsonify({'message': 'Tokens received'}, 200)

# POST: upload file to get course data.
@app.route('/uploadFile', methods=["POST"])
def handleFileUpload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file selected'}, 400)
    
    file = request.files['file']
    
    if file and allowed_files(file.filename):
        course_data = {'course_name': 'Math 1550 Section 021', 'assignments': [{'name': 'Homework', 'due_date': 'Tuesday, February 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 1', 'due_date': 'Monday, February 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 2', 'due_date': 'Monday, March 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 3', 'due_date': 'Thursday, March 30th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 4', 'due_date': 'Tuesday, April 25th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Final Exam', 'due_date': 'Saturday, May 13th', 'start_time': '7:30 am', 'end_time': '9:30 am'}]}
        if file.filename.rsplit('.', 1)[1].lower() == 'pdf':
            pdfCourseData = get_due_dates(extract_PDF(file))
            return jsonify(pdfCourseData)
        elif file.filename.rsplit('.', 1)[1].lower() == 'docx':
            docxCourseData = get_due_dates(extract_DOCX(file))
            return jsonify(docxCourseData)
    else:
        return jsonify({'error': 'Invalid File Extension'}, 400)
    
if __name__ == '__main__':
    app.run(debug=True)