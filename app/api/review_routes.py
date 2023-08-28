from flask import Blueprint, request, redirect
from ..models import db
from ..models.reviews import Review
from ..forms.review_form import ReviewForm
from flask_login import current_user
from datetime import datetime

reviews = Blueprint("reviews", __name__)

def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
        return errorMessages

@reviews.route("/current")
def get_user_reviews():
    """
    Query for reviews by user id
    """
    user_reviews = Review.query.filter(Review.userId == current_user.id).all()
    response = [user_rev.to_dict() for user_rev in user_reviews]
    print(response)
    return response
@reviews.route("/")
def get_all_reviews():
    """
    Query for all reviews

    """
    all_reviews = Review.query.all()
    response = [rev.to_dict() for rev in all_reviews]
    print(response)
    return response

@reviews.route("/<int:id>")
def get_one_review(id):
    """
    Query for one review by review id
    """
    response = Review.query.get(id)
    print(response.to_dict())
    return response.to_dict()




@reviews.route("/<int:id>", methods=["DELETE"])
def delete_review(id):
    """
    Delete review by review id
    """
    review_to_delete = Review.query.get(id)
    product_id = review_to_delete.productId
    db.session.delete(review_to_delete)
    db.session.commit()
    return redirect(f"/products/{product_id}")

# @reviews.route("/<int:id>", methods=["PUT"])
# def update_review():
#     review_to_update = Review.query.get(id)
#     product_id = review_to_update.productId
