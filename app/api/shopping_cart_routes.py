from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models.shopping_cart_items import ShoppingCartItems
from ..models.product import Product

shopping_cart = Blueprint('shopping_carts', __name__)


@shopping_cart.route('/current')
@login_required
def get_shopping_cart():
    """
    Query for all shopping_cart_items and returns them in a list of shopping_cart dictionaries with the current user
    """
    # shopping_cart = db.seesion.query(ShoppingCartItems, Product).filter(ShoppingCartItems.shoppingCartId == current_user.id, ShoppingCartItems.productId == Product.id).all()
    shopping_cart = ShoppingCartItems.query.filter(ShoppingCartItems.shoppingCartId == current_user.id).all()
    # shopping_cart = ShoppingCartItems.query.all()
    # cart = ShoppingCartItems.query.filter(ShoppingCartItems.id == 1)
    # print(cart.to_dict())
    response = [cart.to_dict() for cart in shopping_cart]
    # response = []
    # for item in shopping_cart:
    #     product = Product.query.filter(item.productId == Product.id)
    #     item["Product"] = product
    #     response.append(item.to_dict())
    # item = ShoppingCartItems.query.first()
    # print(item.dodo)  # SQLAlchemy loads addresses here
    # return cart
    # print(response)
    return {'shopping_carts': response}
    # return {'the_cart': cart.to_dict()}


# #this goes into products detail page
# @products.route('products/<int:id>', methods=["POST"])
# @login_required
# def create_shopping_cart_item_by_product():
#     """
#     Create a shopping cart item to the shopping cart from the product detail page
#     """
#     shopping_cart = ShoppingCartItems.query.get(id)
#     return shopping_cart.to_dict()



@shopping_cart.route('/current', methods=["PUT"])
def update_shopping_cart_item():
    shopping_cart_item_to_update = ShoppingCartItems.query.get(id)
    product_id = shopping_cart_item_to_update.productId
    

