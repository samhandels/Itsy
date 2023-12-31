from flask import Blueprint, redirect, request
from ..models import db
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
    shopping_cart = ShoppingCartItems.query.filter(ShoppingCartItems.shoppingCartId == current_user.id).all()
    response = [cart.to_dict() for cart in shopping_cart]
    return {'shopping_carts': response}


#create an item with methods=["POST"] is in the @products.route


@shopping_cart.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_shopping_cart_item(id):
    """
    1. Clicking X Remove on item card section in shopping cart
    2. Clicking Order up! from payment section in shopping cart
    delete thunk fetch route: /api/shopping_cart/${item.id}
    id is the product id, remove all the same product id of the shopping cart table
    """
    # >>> User.query.filter(User.email.endswith('@example.com')).all()
    all_remove_items = ShoppingCartItems.query.filter(ShoppingCartItems.productId == id).all()
    delete_posts = [db.session.delete(item) for item in all_remove_items]
    db.session.commit()
    return (f"product with id {id} deleted from shopping cart")




