from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, SubmitField, FloatField
from wtforms.validators import DataRequired, Length

categories = [("jewelry", "Jewelry & Accessories"), ("clothing", "Clothing & Shoes"), ("home", "Home & Living"), ("wedding", "Wedding & Party"), ("toys", "Toys & Entertainment"), ("art", "Art & Collectibles"), ("craft", "Craft Supplies"), ("gifts", "Gifts & Gift Cards")]

class ProductForm(FlaskForm):
      name = StringField("Name", validators=[DataRequired(), Length(min=1, max=100)])
      price = FloatField("Price", validators=[DataRequired()])
      description = StringField("Description", validators=[DataRequired(), Length(min=1, max=1000)])
      quantity = IntegerField("Quantity", validators=[DataRequired()])
      category = SelectField("Category", choices=categories)
      submit = SubmitField("Create Product")
