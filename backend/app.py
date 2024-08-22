from flask import Flask, jsonify, request
from flask_cors import CORS
from supabase import create_client, Client
from dotenv import load_dotenv
import os

load_dotenv() 

app = Flask(__name__)
CORS(app) 

url = "https://aeucvvrismbmdqfdcvwo.supabase.co"
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFldWN2dnJpc21ibWRxZmRjdndvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDM1OTUxMCwiZXhwIjoyMDM5OTM1NTEwfQ.taeT4DuLo4OQZGEH5PMKK0CYKVjuwDRh_432rwH2jTI"
supabase: Client = create_client(url, key)

@app.route('/', methods=['GET'])
def root():
    return ('helllo from backend :)')


if __name__ == '__main__':
    app.run(debug=True)
