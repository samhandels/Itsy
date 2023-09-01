from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired
from app.models import reviews

class ReviewForm(FlaskForm):
    review = StringField("review", validators=[DataRequired()])
    stars = IntegerField("stars", validators=[DataRequired()])
    likes = IntegerField("likes")
    submit = SubmitField("submit")
