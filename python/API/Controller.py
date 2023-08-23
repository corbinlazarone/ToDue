from flask import Flask, jsonify, request
from flask_cors import CORS
from syllabusExtract import get_due_dates, create_calendar_events, extract_DOCX, extract_PDF
from middleware import require_authorization_header, grab_tokens, get_user_info, allowed_files, send_email_from_user

app = Flask("To Due")
CORS(app)
access_token = None # global access token

# POST: login in user.
@app.route('/api/login', methods=["POST"])
def handleCode():
    if 'code' not in request.json:
        return jsonify({'error': 'no code found'}, 400)

    code = request.json['code']
    tokens = grab_tokens(code)
    global access_token
    access_token = tokens.get('access_token')
    id_token = tokens.get('id_token')
        
    return id_token

# POST: Send Contact Message.
@app.route('/api/send', methods=["POST"])
def sendMessage():
    if 'formItems' not in request.json:
        return jsonify(message="No Items in request body."), 400
    
    items = request.json['formItems']
    msg = send_email_from_user(items)

    return jsonify(message=msg), 200

# GET: profile info.
@app.route('/api/profile', methods=["GET"])
@require_authorization_header
def GetProfileInfo():
    profileData = get_user_info(access_token)
    return jsonify({'result': profileData}, 200)

# POST: upload file to get course data to populate form.d
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
    
if __name__ == '__main__':
    app.run(debug=True)