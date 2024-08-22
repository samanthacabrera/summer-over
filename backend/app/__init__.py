from flask import Flask
from flask_cors import CORS
import os
from dotenv import load_dotenv
from supabase import create_client, Client


load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '.env'))

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_KEY")

if not url or not key:
    raise ValueError("SUPABASE_URL or SUPABASE_KEY environment variables are not set")

supabase: Client = create_client(url, key)

from app.routes import initialize_routes
initialize_routes(app)
