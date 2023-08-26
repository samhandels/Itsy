from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models.shopping_cart_items import ShoppingCartItems
from ..forms.shopping_cart_form import ShoppingCartForm

shopping_cart = Blueprint('shopping_carts', __name__)


@shopping_cart.route('/current')
@login_required
def get_shopping_cart():
    """
    Query for all shopping_cart_items and returns them in a list of shopping_cart dictionaries
    """
    shopping_cart = ShoppingCartItems.query.all()
    response = [cart.to_dict() for cart in shopping_cart]
    print(response)
    return {'shopping_carts': response}



#this goes into products detail page
@products.route('products/<int:id>', methods=["POST"])
@login_required
def create_shopping_cart_item_by_product():
    """
    Create a shopping cart item to the shopping cart from the product detail page
    """
    shopping_cart = ShoppingCartItems.query.get(id)
    return shopping_cart.to_dict()



@shopping_cart.route('/current', methods=["PUT"])
def update_shopping_cart_item():
    shopping_cart_item_to_update = ShoppingCartItems.query.get(id)
    product_id = shopping_cart_item_to_update.productId
    

