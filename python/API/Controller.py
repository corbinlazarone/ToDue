from flask import Flask, jsonify, request
from flask_cors import CORS
from script import get_due_dates, extract_DOCX, extract_PDF

app = Flask("ToDue")
CORS(app)

ALLOWED_EXTENSIONS = {'pdf', 'docx'}

def allowed_files(file_name):
    return '.' in file_name and file_name.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Routes
@app.route('/uploadFile', methods=["POST"])
def handleFileUpload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file selected'}, 400)
    
    file = request.files['file']
    
    if file and allowed_files(file.filename):
        course_data = {'course_name': 'Math 1550 Section 021', 'assignments': [{'name': 'Homework', 'due_date': 'Tuesday, February 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 1', 'due_date': 'Monday, February 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 2', 'due_date': 'Monday, March 6th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 3', 'due_date': 'Thursday, March 30th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Exam 4', 'due_date': 'Tuesday, April 25th', 'start_time': '8:30 am', 'end_time': '9:20 am'}, {'name': 'Final Exam', 'due_date': 'Saturday, May 13th', 'start_time': '7:30 am', 'end_time': '9:30 am'}]}
        if file.filename.rsplit('.', 1)[1].lower() == 'pdf':
            test = get_due_dates(extract_PDF(file))
            return jsonify(test)
        elif file.filename.rsplit('.', 1)[1].lower() == 'docx':
            test2 = get_due_dates(extract_DOCX(file))
            return jsonify(test2)
        # return jsonify(course_data)
    else:
        return jsonify({'error': 'Invalid File Extension'}, 400)
    
if __name__ == '__main__':
    app.run(debug=True)