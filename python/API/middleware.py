from flask import Flask, jsonify, request
from functools import wraps
from google.oauth2 import id_token
from google.auth.transport import requests
import json

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