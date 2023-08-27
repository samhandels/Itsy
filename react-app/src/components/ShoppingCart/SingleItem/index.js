import React from "react";
import "../AllShoppingCartItems/AllShoppingCartItems.css";
import { useDispatch, useSelector } from "react-redux";


export default function SingleItems({ item }) {

  const sessionUser = useSelector((state) => state.session.user);
 

  if (!sessionUser) return null;
  return (
    <div className="components-border">
      <div className="item container row"></div>
        <div className="item-detail container row">
          <div className="img-delete column">
            <div>
            <img src={item.product_image[0]} alt="" />
            </div>
            <div>delete</div>
          </div>
          <div className="description-quantity column">
          <div>{item.name}</div>
          <div>{item.quantity}</div>
          </div>
        </div>
        <div className="item-price container column">
          <div>{item.price}</div>
          <div>{item.quantity}</div>
        </div>
        <div className="payment container"></div>
    </div>
  );
}

