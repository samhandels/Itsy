from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products
from .product_images import seed_product_images, undo_product_images
from .reviews import seed_reviews, undo_reviews
from .shopping_cart import seed_shopping_carts, undo_shopping_carts
from .shopping_cart_item import seed_shopping_carts_items, undo_shopping_carts_items
from .favorites import seed_favorites, undo_favorites
from .transactions import seed_transactions, undo_transactions
from .transaction_items import seed_transaction_items, undo_transaction_items

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_favorites()
        undo_shopping_carts_items()
        undo_shopping_carts()
        undo_reviews()
        undo_product_images()
        undo_products()
        undo_users()
        undo_transactions()
        undo_transaction_items()
    seed_users()
    seed_products()
    seed_product_images()
    seed_reviews()
    seed_shopping_carts()
    seed_shopping_carts_items()
    seed_favorites()
    seed_transactions()
    seed_transaction_items()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_favorites()
    undo_shopping_carts_items()
    undo_shopping_carts()
    undo_reviews()
    undo_product_images()
    undo_products()
    undo_users()
    undo_transactions()
    undo_transaction_items()
    # Add other undo functions here
