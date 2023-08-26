from flask import Blueprint, request, redirect
from ..models import db
from ..models.favorites import Favorite
from flask_login import current_user


favorites = Blueprint("favorites", __name__)

def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
        return errorMessages

@favorites.route("/")
def get_favorites():
    all_favorites = Favorite.query.all()
    response = [fav.to_dict() for fav in all_favorites]
    print(response)
    return response
