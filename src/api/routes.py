"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Comment, Game
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

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

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Query your database for username and password
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad email or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify({"id": user.id, "email": user.email }), 200

@api.route('/comment', methods=['POST'])
@jwt_required()
def create_comment():

    data = request.json

    comment = Comment.query.filter_by(user_id=data['user_id']).first()
    if comment is not None:
        return jsonify({"msg": "This user already made a comment"}), 400

    comment = Comment(
                    content=data['content'],
                    user_id=data['user_id'], 
                    game_id=data['game_id'],
                    score=data['score'],
                )
    db.session.add(comment)
    db.session.commit()

    response_body = {
        'result': comment.serialize()
    }

    return jsonify(response_body), 201

@api.route('/game/<int:game_id>', methods=['GET'])
def get_single_game(game_id):

    game = Game.query.filter_by(id=game_id).first()
    if game is None:
        return jsonify({"msg": "Game not found"}), 404
    comments = Comment.query.filter_by(game_id=game_id).all()
    
    return jsonify({  "comments": [{**comment.serialize()} for comment in comments], **game.serialize() })