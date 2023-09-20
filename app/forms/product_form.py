from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, SubmitField, FloatField
from wtforms.validators import DataRequired, Length
from flask_wtf.file import FileField, FileAllowed, FileRequired
from app.api.aws_helper import ALLOWED_EXTENSIONS

categories = [("Jewelry", "Jewelry & Accessories"), ("Clothing", "Clothing & Shoes"), ("Home", "Home & Living"), ("Wedding", "Wedding & Party"), ("Toys", "Toys & Entertainment"), ("Art", "Art & Collectibles"), ("Craft", "Craft Supplies"), ("Gifts", "Gifts & Gift Cards")]

class ProductForm(FlaskForm):
      name = StringField("Name", validators=[DataRequired(), Length(min=1, max=100)])
      price = FloatField("Price", validators=[DataRequired()])
      description = StringField("Description", validators=[DataRequired(), Length(min=1, max=1000)])
      quantity = IntegerField("Quantity")
      category = SelectField("Category", choices=categories)
      image = FileField("Photo", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
      submit = SubmitField("Create Product")
