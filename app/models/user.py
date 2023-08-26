from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(100))
    lastName = db.Column(db.String(100))
    username = db.Column(db.String(40), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)

    # relationship atrribute
    favorites_lists = db.relationship("Favorite", back_populates="users", cascade="all, delete")
    products = db.relationship("Product", back_populates="users", cascade="all, delete")
    reviews = db.relationship("Review", back_populates="users", cascade="all, delete")
    shopping_carts = db.relationship("ShoppingCart", back_populates="users", cascade="all, delete")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'username': self.username,
            'hashed_password': self.hashed_password,
            'email': self.email,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }
