"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['POST'])
def register_user():

    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user is not None:
        return jsonify({"msg": "This email is already registered"}), 400
    user = User.query.filter_by(username=data['username']).first()
    if user is not None:
        return jsonify({"msg": "This username is already registered"}), 400
    user = User(email=data['email'], username=data['username'], password=data['password'], is_active=True)
    db.session.add(user)
    db.session.commit()

    response_body = {
        'result': user.serialize()
    }

    return jsonify(response_body), 201