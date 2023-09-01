from flask import Blueprint, redirect, request
from ..models import db
from flask_login import login_required, current_user
from ..models.transaction_items import TransactionItems
from ..models.transactions import Transactions


transactions = Blueprint('transactions', __name__)

@transactions.route('/current')
def get_transactions():
        print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        transaction_items = TransactionItems.query.all()
        response = [trans.to_dict() for trans in transaction_items]
        print("RESPONSE", response)
        return response

@transactions.route('', methods=["POST"])
def add_transaction():
        userId = current_user.id

        transaction = Transactions(
                userId = userId
        )
        db.session.add(transaction)
        db.session.commit()

        return transaction.to_dict()

@transactions.route('/<int:id>', methods=["POST"])
def add_transaction_item(id):
        req_json = request.get_json(force=True)
        transactionId = req_json["transactionId"]
        productId = req_json["productId"]

        newTransItem = TransactionItems(
                transactionId = transactionId,
                productId = productId
        )
        db.session.add(newTransItem)
        db.session.commit()

        if(newTransItem):
                return newTransItem.to_dict()
