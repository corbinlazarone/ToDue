from flask import Flask, jsonify, request
from functools import wraps
import smtplib
from email.message import EmailMessage
from google.oauth2 import id_token
from google.auth.transport import requests
import requests as req
import json

# Constants
ALLOWED_EXTENSIONS = {'pdf', 'docx'}

with open('config.json') as config_file:
    config = json.load(config_file)
    EMAIL_HOST = config['EMAIL_HOST']
    EMAIL_HOST_PASSWORD = config['EMAIL_HOST_PASSWORD']
    CLIENT_ID = config['CLIENT_ID']
    CLIENT_SECRET = config['CLIENT_SECRET']

# functions

def require_authorization_header(func):
    @wraps(func)
    def decorated_function(*args, **kwargs):
        # Check if Authorization header is present.
        if 'Authorization' not in request.headers:
            return jsonify(message="Authorization header is missing"), 401

        with open("config.json") as config_file:
            config = json.load(config_file)
            CLIENT_ID = config['CLIENT_ID']
        
        # Extract the token from the header
        auth_header = request.headers['Authorization']
        token = auth_header.split(' ')[1]
        
        # Validate token using google verify_oauth2_token.
        try:
            id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)
        except ValueError:
            return jsonify(message="Token Invalid"), 401
        
        return func(*args, **kwargs)
    
    return decorated_function

def send_email_from_user(messageObj):
    """
    Sends email to developer's work email for user messages from contact form on To Due's Landing page.

    Args:
        messageObj (object): form message object from the contact form on To Due's Landing page.

    Returns:
        _type_: if successs return string 'message sent', else catch exception. 
    """

    Name = messageObj.get('firstName') + messageObj.get('lastName')
    Email = messageObj.get('email')
    Msg = messageObj.get('message')

    msg = EmailMessage()
    msg.set_content(f"Name: {Name}\n Email: {Email}\n Message: {Msg}")
    msg['Subject'] = 'To Due Contact Form Submission'
    msg['From'] = EMAIL_HOST
    msg['To'] = EMAIL_HOST

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(EMAIL_HOST, EMAIL_HOST_PASSWORD)
            server.send_message(msg)
            server.quit()
        return 'message sent'
    except Exception as ex:
        return f'Error: ${ex}'

def allowed_files(file_name):
    """
    Checks file extension on uploaded file to see if it's a PDF or DOCX.

    Args:
        file_name (string): file name of the uploaded file.

    Returns:
        _type_: returns true or false if file has the allowed extension. 
    """
    return '.' in file_name and file_name.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def grab_tokens(code):
    """
    Sends a request to google auth url to authenticate user.

    Args:
        code (object): object from signing in user.
    
    Returns:
        _type_: response from google auth url.
    """
        
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

    response = req.post(token_url, data=payload)
    response_json = response.json()

    return response_json

def get_user_info(token):
        """
        Exchanges user's id token for user's profile info from google people api.

        Args:
            token (string): id token from signing in user.

        Returns:
            _type_: returns profile data or catches exception.
        """
        headers = {
            'Authorization': f'Bearer {token}',
            'Accept': 'application/json',
        }

        params = {
            'personFields': 'names,emailAddresses,photos',
        }

        url = 'https://people.googleapis.com/v1/people/me'

        try:
            response = req.get(url, headers=headers, params=params)
            profile_data = response.json()
            return profile_data
        except Exception as ex:
                return f"Error getting user profile info: ${ex}"