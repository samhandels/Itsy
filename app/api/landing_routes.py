from flask import Blueprint, jsonify

landing_routes = Blueprint('landing', __name__)

@landing_routes.route('/')
def landing():
    return ("<h1>hello world</h1>")
