from flask import Blueprint, request, redirect
from ..models import db
from ..models.favorites import Favorite
from flask_login import current_user, login_required


favorites = Blueprint("favorites", __name__)

def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
        return errorMessages

@favorites.route("")
@login_required
def get_favorites():
    all_favorites = Favorite.query.filter(Favorite.userId==current_user.id).all()
    response = [fav.to_dict() for fav in all_favorites]
    print(response)
    return response


@favorites.route("", methods=["POST"])
@login_required
def add_favorite(productId):
    existing_favorite = Favorite.query.filter(userId = current_user.id, productId = productId).first()
    if existing_favorite:
        return {"errors": ["This product is already in favorites."]}, 400

    new_favorite = Favorite(userId=current_user.id, productId = productId)
    db.session.add(new_favorite)
    db.session.commit()

    return new_favorite.to_dict(), 201


@favorites.route("", methods=["DELETE"])
@login_required
def delete_favorite(productId):
    favorite = Favorite.query.filter(userId = current_user.id, productId = productId).first()
    if not favorite:
        return {"errors": ["Favorite not found."]}, 404

    db.session.delete(favorite)
    db.session.commit()

    return {}, 204
