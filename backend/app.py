import os

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo

load_dotenv()

app = Flask(__name__)

app.config["CORS_ORIGINS"] = ["http://localhost:3000"]
CORS(app)

app.config["MONGO_URI"] = os.getenv("MONGO_URI")
mongodb_client = PyMongo(app)
db = mongodb_client.db

# Create collections
db.create_collection("users")
db.create_collection("groups")
db.create_collection("posts")
db.create_collection("replies")


# Routes
@app.route("/health", methods=["GET"])
def health_check():
    return jsonify(status="ok")


@app.route("/user/login", methods=["POST"])
def login():
    # email = request.form.get("email")
    # password = request.form.get("password")
    pass


@app.route("/user/register", methods=["POST"])
def register():
    pass


@app.route("/user/groups/<user_id>", methods=["GET"])
def get_user_groups(user_id):
    """
    Get groups a user is part of
    """
    pass


@app.route("/user/invite", methods=["POST"])
def add_user_to_group():
    """
    Add user to a group
    """
    pass


@app.route("/group/<group_id>", methods=["GET"])
def get_group(group_id):
    """
    Get information for a group
    """
    pass


@app.route("/group", methods=["POST"])
def create_group():
    """
    Make new group
    """
    pass


@app.route("/group/invite/<invite_id>", methods=["GET"])
def get_invite(invite_id):
    """
    Get invite information
    """
    pass


@app.route("/posts/<group_id>", methods=["GET"])
def get_posts(group_id):
    """
    Retrieve all posts for a group
    """
    pass


@app.route("/post/<post_id>", methods=["GET"])
def get_post(post_id):
    """
    Retrieve post questions
    """
    pass


@app.route("/post/reply/<question_id>", methods=["GET"])
def get_post_answers(question_id):
    """
    Retrieve replies to a specific question
    """
    pass


@app.route("/post/reply", methods=["POST"])
def create_post():
    """
    Create a reply to a question
    """
    pass
