from flask import Blueprint, request, redirect
from ..models import db
from ..models.product import Product
from ..models.reviews import Review
from ..models.product_images import ProductImage
from ..models.shopping_cart_items import ShoppingCartItems
from ..models.favorites import Favorite
from ..forms.product_form import ProductForm
from ..forms.review_form import ReviewForm
from datetime import datetime
from flask_login import login_required, current_user # current_user.id


products = Blueprint("products", __name__)


@products.route("/")
def get_products():
      """
      Query all products, data response:
      [
      {
      "category": "toys",
      "createdAt": null,
      "description": "This is the description for the first product",
      "id": 1,
      "name": "product-one",
      "ownerId": 1,
      "ownerName": "Demo",
      "price": 12.95,
      "quantity": 10,
      "updatedAt": null,
      "product_image": [
      "https://i.etsystatic.com/24879642/r/il/84b06b/4197773364/il_794xN.4197773364_560s.jpg"
      ],
      "reviews": [
      "Here is a review for product 1 by user 2"
      ]
      }
      ]
      """
      all_products = Product.query.all()

      response = [prod.to_dict() for prod in all_products]

      print(response)
      return response


@products.route("/<int:id>")
def get_single_product(id):
      """
      query one product by id, data response:
      {
      "category": "toys",
      "createdAt": null,
      "description": "This is the description for the first product",
      "id": 1,
      "name": "product-one",
      "ownerId": 1,
      "price": 12.95,
      "quantity": 10,
      "updatedAt": null
      "product_image": [
      "https://i.etsystatic.com/24879642/r/il/84b06b/4197773364/il_794xN.4197773364_560s.jpg"
      ],
      "reviews": [
      "Here is a review for product 1 by user 2"
      ]
      }
      """
      response = Product.query.get(id)
      print(response.to_dict())
      return response.to_dict()


@products.route("/new", methods=["POST"])
def create_product():
      """
      query one product by id, data response:
      {
      "category": "toys",
      "createdAt": null,
      "description": "This is the description for the first product",
      "id": 1,
      "name": "product-one",
      "ownerId": 1,
      "price": 12.95,
      "quantity": 10,
      "updatedAt": null
      "product_image": [
      "https://i.etsystatic.com/24879642/r/il/84b06b/4197773364/il_794xN.4197773364_560s.jpg"
      ],
      "reviews": [
      "Here is a review for product 1 by user 2"
      ]
      }
      """
      form = ProductForm()

      form["csrf_token"].data = request.cookies["csrf_token"]

      if form.validate_on_submit():

            new_product = Product(
                  name = form.data["name"],
                  price = form.data["price"],
                  description = form.data["description"],
                  quantity = form.data["quantity"],
                  category = form.data["category"],
                  ownerId = current_user.id
            )

            print(new_product)
            db.session.add(new_product)
            db.session.commit()

            all_products = Product.query.all()

            index = len(all_products)

            new_image = ProductImage (
                  url = form.data["url"],
                  productId = index
            )

            print(new_image)
            db.session.add(new_image)
            db.session.commit()

            response = Product.query.get(index)
            print(response)
            return response.to_dict()

      else:
            print(form.errors)
            return {"errors": form.errors}


@products.route("/update/<int:id>", methods=["POST"])
def update_product(id):

      form = ProductForm()

      form["csrf_token"].data = request.cookies["csrf_token"]

      if form.validate_on_submit():
           product = Product.query.get(id)

           product.name = form.data["name"],
           product.price = form.data["price"],
           product.description = form.data["description"],
           product.quantity = form.data["quantity"],
           product.category = form.data["category"]
           db.session.commit()

           image = ProductImage.query.get(id)

           image.url = form.data["url"]
           db.session.commit()

           response = Product.query.get(id)
           print(response)
           return response.to_dict()

      else:
           print(form.errors)
           return {"errors": form.errors}


@products.route("/delete/<int:id>", methods=["DELETE"])
def delete_product(id):
      product = Product.query.get(id)

      if product:
            try:
                  db.session.delete(product)
                  db.session.commit()
                  return redirect("/")
            except Exception as error:
                  return { "errors": error }

      else:
            return { "error": "product can't be found" }


@products.route("/<int:id>/reviews")
def get_all_reviews_by_product(id):
    """
    Query for reviews by product id
    """
    product_reviews = Review.query.filter(Review.productId == id).all()
    response = [prod_rev.to_dict() for prod_rev in product_reviews]
    print(response)
    return response


@products.route("/<int:id>/reviews", methods=["POST"])
def create_review_by_product(id):
    """
    Post new review for product by product id
    """
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
    else:
          print(form.errors)
          return {"errors":form.errors}


@products.route('/<int:id>/shopping_cart', methods=["POST"])
@login_required
def create_shopping_cart_item_by_product(id):
    """
    Create a shopping cart item to the shopping cart from the product detail page, only need productID and shoppingCartId
    """
    item = ShoppingCartItems(
        productId = id,
        shoppingCartId = current_user.id
    )
    db.session.add(item)
    db.session.commit()
    return item.to_dict()

@products.route('/<int:id>/favorites', methods=["POST"])
@login_required
def add_favorite(id):
    existing_favorite = Favorite.query.filter(Favorite.userId == current_user.id, Favorite.productId == id).first()
    if existing_favorite:
        return {"errors": ["This product is already in favorites."]}, 400

    new_favorite = Favorite(
         productId = id,
         userId = current_user.id
    )

    db.session.add(new_favorite)
    db.session.commit()
    return new_favorite.to_dict(), 201


@products.route('/<int:id>/favorites', methods=["DELETE"])
@login_required
def delete_favorite(id):
    favorite = Favorite.query.filter(Favorite.userId == current_user.id, Favorite.productId == id).first()
    if not favorite:
        return {"errors": ["Favorite not found."]}, 404

    db.session.delete(favorite)
    db.session.commit()

    return {}, 204
