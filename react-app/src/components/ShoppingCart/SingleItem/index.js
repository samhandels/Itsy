import React from "react";
import "../AllShoppingCartItems/AllShoppingCartItems.css";
import { useDispatch, useSelector } from "react-redux";


export default function SingleItems({ item }) {

  const sessionUser = useSelector((state) => state.session.user);
 

  if (!sessionUser) return null;
  return (
    <div className="components-border">
      <div className="item container row">
        <div className="item-detail container row">
          <div className="img-delete column">
            <div>
            {/* {item.product.product_image[0]} */}
            <img src="https://ae01.alicdn.com/kf/S873941bf1184438a8d928a6572dea72dJ/Teasing-Cat-Plastic-Finger-Gloves-Human-Fake-Hand-Cat-Interactive-Toys-Caress-Cat-Dog-Toys-Little.jpg" alt="" className="cart-img"/>
            
            </div>
            <div>delete</div>
          </div>
          <div className="description-quantity column">
          <div>{item.product.name}</div>
          <div>quantity: {item.product.quantity}</div>
          </div>
        </div>
        <div className="item-price container column">
          <div>$ {item.product.price}</div>
          <div>{item.product.quantity}</div>
        </div>
        </div>
        <div className="payment container column">
        <div>How you'll pay</div>
        <div className="row space-between">
        <div>Item(s) total</div>
        <div>$ {item.product.price}</div>
        </div>
        <div className="row space-between">
          <div>Shop discount</div>
          <div>$ {item.product.price * 1/5}</div>
        </div>
        <div className="row space-between ">
          <div>Subtotal</div>
          <div>$ {item.product.price * 4/5}</div>
        </div>
        <div className="row space-between ">
          <div>Shipping</div>
          <div>$ {item.product.price * 1/10}</div>
        </div>
        <div className="row space-between ">
          <div>Total (item)</div>
          <div>$ {item.product.price * 1.1}</div>
        </div>
        </div>
    </div>
  );
}

