from flask import Blueprint, request, redirect
from ..models import db
from ..models.reviews import Review
from..models.transactions import Transactions
from ..models.transaction_items import TransactionItems
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



@reviews.route("/<int:id>", methods=["PUT"])
def update_review(id):
    """
    Post new review for product by product id
    """
    form = ReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    review = Review.query.get(id)
    if form.validate_on_submit():

            review.review = form.data["review"]
            review.stars = int(form.data["stars"])
            review.likes = int(form.data["likes"])
            print("REVIEW", review)
            db.session.commit()
            return review.to_dict()
    else:
          print(form.errors)
          return {"errors":form.errors}

@reviews.route("/<int:id>")
def get_one_review(id):
    """
    Query for one review by review id
    """
    response = Review.query.get(id)
    print(response.to_dict())
    return response.to_dict()

@reviews.route("/waitingReviews")
def waitingReviews():
    userId = current_user.id
    userReviews = Review.query.filter(Review.userId == userId).all()
    reviewIds = [review.productId for review in userReviews]
    userTrans = Transactions.query.filter(Transactions.userId == userId).all()
    transIds = [trans.id for trans in userTrans]
    userItemsPurchased = []
    for id in transIds:
        userItemsPurchased = (TransactionItems.query.filter(TransactionItems.transactionId == id))
    noReviews = [item.productId for item in userItemsPurchased if item.productId not in reviewIds]
    response = noReviews
    return response

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
