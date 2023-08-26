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

@reviews.route("/")
def get_reviews():
    all_reviews = Review.query.all()
    response = [rev.to_dict() for rev in all_reviews]
    print(response)
    return response

@reviews.route("/<int:id>")
def get_one_review():
    response = Review.query.get(id)
    print(response)
    return response

@reviews.route("/<int:id>/reviews")
def get_all_reviews_by_product():
    product_reviews = Review.query.filter(Review.productId == id).all()
    response = [prod_rev.to_dict() for prod_rev in product_reviews]
    print(response)
    return response

@reviews.route("/<int:id>/reviews/new", methods=["POST"])
def create_review_by_product():
    form = ReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        review = Review(
            productId = id,
            userId = current_user.id,
            review = form.data["review"],
            stars = form.data["stars"],
            createdAt = datetime.now(),
            updatedAt = datetime.now()
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


@reviews.route("/<int:id>", methods=["DELETE"])
def delete_review():
    review_to_delete = Review.query.get(id)
    product_id = review_to_delete.productId
    db.session.delete(review_to_delete)
    db.session.commit()
    return redirect(f"/products/{product_id}")

@reviews.route("/<int:id>", methods=["PUT"])
def update_review():
    review_to_update = Review.query.get(id)
    product_id = review_to_update.productId
    
