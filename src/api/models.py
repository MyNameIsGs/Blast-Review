import enum
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func

db = SQLAlchemy()

tags = db.Table('tags',
    db.Column('tag_id', db.Integer, db.ForeignKey('tag.id'), primary_key=True),
    db.Column('game_id', db.Integer, db.ForeignKey('game.id'), primary_key=True)
)

user_tags = db.Table('user_tags',
    db.Column('tag_id', db.Integer, db.ForeignKey('tag.id'), primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True)
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    tags = db.relationship('Tag', secondary=user_tags, lazy='subquery',
        backref=db.backref('users', lazy=True))

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "tags": [{
                **tag.serialize()
            } for tag in self.tags],
            # do not serialize the password, its a security breach
        }

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(), unique=False, nullable=True)
    picture = db.Column(db.String(), unique=False, nullable=True)
    banner = db.Column(db.String(), unique=False, nullable=True)
    release_date = db.Column(db.DateTime(), unique=False, nullable=True)
    author = db.Column(db.String(80), unique=False, nullable=True)
    company = db.Column(db.String(80), unique=False, nullable=True)
    tags = db.relationship('Tag', secondary=tags, lazy='subquery',
        backref=db.backref('games', lazy=True))

    def __repr__(self):
        return f'<Game {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "picture": self.picture,
            "banner": self.banner,
            "author": self.author,
            "company": self.company,
            "release_date": self.release_date,
            "tags": [{
                **tag.serialize()
            } for tag in self.tags],
        }

class Tag(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(200), unique=False, nullable=True)
    is_console = db.Column(db.Boolean(), unique=False, nullable=True, default=False)

    def __repr__(self):
        return f'<Tag {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "is_console": self.is_console,
        }

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(400), nullable=True)
    score = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    game_id = db.Column(db.Integer, db.ForeignKey('game.id'),
        nullable=False)
    created = db.Column(db.TIMESTAMP, server_default=func.now(), nullable=False)

    def __repr__(self):
        return f'<Comment {self.id}>'
    
    def serialize(self):
        user = User.query.filter_by(id=self.user_id).first()
        return {
            "id": self.id,
            "content": self.content,
            "created": self.created,
            "score": self.score,
            "user": user.serialize(),
        }