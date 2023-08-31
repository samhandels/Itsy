from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, SubmitField, FloatField
from wtforms.validators import DataRequired, Length

categories = [("Jewelry", "Jewelry & Accessories"), ("Clothing", "Clothing & Shoes"), ("Home", "Home & Living"), ("Wedding", "Wedding & Party"), ("Toys", "Toys & Entertainment"), ("Art", "Art & Collectibles"), ("Craft", "Craft Supplies"), ("Gifts", "Gifts & Gift Cards")]

class ProductForm(FlaskForm):
      name = StringField("Name", validators=[DataRequired(), Length(min=1, max=100)])
      price = FloatField("Price", validators=[DataRequired()])
      description = StringField("Description", validators=[DataRequired(), Length(min=1, max=1000)])
      quantity = IntegerField("Quantity", validators=[DataRequired()])
      category = SelectField("Category", choices=categories)
      url = StringField("Photo", validators=[DataRequired()])
      submit = SubmitField("Create Product")
