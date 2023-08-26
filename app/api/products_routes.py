from flask import Blueprint, request, redirect
from ..models import db
from ..models.product import Product
from ..forms.product_form import ProductForm
from flask_login import current_user # current_user.id


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
      "price": 12.95,
      "quantity": 10,
      "updatedAt": null
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
      }
      """
      response = Product.query.get(id)
      print(response.to_dict())
      return response.to_dict()


@products.route("/new", methods=["POST"])
def create_product():
      form = ProductForm()

      form["csrf_token"].data = request.cookies["csrf_token"]

      if form.validate_on_submit():

            new_product = Product(
                  name = form.data["name"],
                  price = form.data["price"],
                  description = form.data["description"],
                  quantity = form.data["quantity"],
                  category = form.data["category"],
                  owner_id = None
            )

            # NEED TO ADD CURRENT USER ABOVE *******************

            print(new_product)
            db.session.add(new_product)
            db.session.commit()
            return new_product

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
