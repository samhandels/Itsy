from flask import Blueprint
from flask_login import login_required
from app.models import ShoppingCart

shopping_cart_routes = Blueprint('shopping_carts', __name__)


@shopping_cart_routes.route('/')
@login_required
def shopping_carts():
    """
    Query for all shopping_carts and returns them in a list of shopping_cart dictionaries
    """
    shopping_carts = ShoppingCart.query.all()
    return {'shopping_carts': [cart.to_dict() for cart in shopping_carts]}


@shopping_cart_routes.route('/<int:id>')
@login_required
def shopping_carts(id):
    """
    Query for a shopping_cart by id and returns that shopping_cart in a dictionary
    """
    shopping_cart = ShoppingCart.query.get(id)
    return shopping_cart.to_dict()
