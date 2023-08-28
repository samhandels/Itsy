import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../AllShoppingCartItems/AllShoppingCartItems.css";
import { useDispatch, useSelector } from "react-redux";

export default function SingleItems({ item }) {
  const productQuantity = item.product.quantity;
  const quantityArr = [...Array(productQuantity + 1).keys()];
  quantityArr.shift(); //1......productQuantity
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);
  const sessionUser = useSelector((state) => state.session.user);
  const price = item.product.price;
  const discount = (price * 0.2).toFixed(2);
  const subtotal = (price * 0.8).toFixed(2);
  const shipping = (price * 0.1).toFixed(2);
  const total = (price * 1.1);

  if (!sessionUser) return null;
  return (
    <div className="components-border row space-between">
      <div className="item container row">
        <div className="item-detail container row">
          <div className="img-delete column">
            <div>owner name</div>

            <div>
              <img
                src="https://ae01.alicdn.com/kf/S873941bf1184438a8d928a6572dea72dJ/Teasing-Cat-Plastic-Finger-Gloves-Human-Fake-Hand-Cat-Interactive-Toys-Caress-Cat-Dog-Toys-Little.jpg"
                alt=""
                className="cart-img"
              />
            </div>
            <div>delete</div>
          </div>
          <div className="description-quantity column">
            <div>{item.product.name}</div>
            <div></div>
            <label>
              Quantity
              <select
                name="selectedPurchaseQuantity"
                value={purchaseQuantity}
                onChange={(e) => setPurchaseQuantity(e.target.value)}
              >
                {quantityArr.map((number) => (
                  <option value={number}>{number}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="item-price container column">
          <div>${price}</div>
          <div>{item.product.quantity}</div>
        </div>
      </div>
      <div className="payment container column">
        <div className="column">
          <div>How you'll pay</div>
          <label>
            <input type="radio" name="myRadio" value="option1" />
            Credit cards
          </label>
          <label>
            <input type="radio" name="myRadio" value="option2" />
            Paypal
          </label>
          <label>
            <input type="radio" name="myRadio" value="option3" />G pay
          </label>
        </div>
        <div className="row space-between">
          <div>Item(s) total</div>
          <div>${price * purchaseQuantity}</div>
        </div>
        <div className="row space-between">
          <div>Shop discount</div>
          <div>-${discount}</div>
        </div>
        <div className="row space-between ">
          <div>Subtotal</div>
          <div>${subtotal}</div>
        </div>
        <div className="row space-between ">
          <div>Shipping</div>
          <div>${shipping}</div>
        </div>
        <div className="row space-between ">
          <div>Total (1 item)</div>
          <div>${total}</div>
        </div>
        <div className="row center">
          <button className="black-button">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}
