import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../AllShoppingCartItems/AllShoppingCartItems.css";
import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "../../OpenModalButton/index";
import { OrderCompleteModal } from "../OrderCompleteModal";
import { deleteItemThunk } from "../../../store/shoppingCartReducer";

export default function SingleItems({ product, productInCartNum, allProducts }) {

  //reflect the current product number in the shopping cart!
  useEffect(() => {
    // console.log(  "**********************product num in single ctiem card component******************", productInCartNum)
    setPurchaseQuantity(productInCartNum);
  }, [productInCartNum]);

  const dispatch = useDispatch();
  const [purchaseQuantity, setPurchaseQuantity] = useState(productInCartNum);
  if (!product) return null;
  const productQuantity = product?.quantity;
  const quantityArr = [...Array(productQuantity + 1).keys()];
  quantityArr.shift(); //1......productQuantity

  const price = product.price;
  const itemTotal = (product.price * purchaseQuantity).toFixed(2);
  const discount = (price * 0.2 * purchaseQuantity).toFixed(2);
  const subtotal = (price * 0.8 * purchaseQuantity).toFixed(2);
  const shipping = (price * 0.1 * purchaseQuantity).toFixed(2);
  const total = (price * 1.1 * purchaseQuantity).toFixed(2);


  // const sessionUser = useSelector((state) => state.session.user);



  const removeItem = (e) => {
    e.preventDefault();
    dispatch(deleteItemThunk(product?.id)); //feed it with all the same product item card ids
    //item1: product1
    //item2: product1
    //item1 and item2 should be remove from database
  };



  // if (!sessionUser) return null;
  return (
    <div id='individual-item-outer-div-cart'>




      <div id='left-panel-individual-item-cart'>


        <div id='store-name-cart'>{product?.ownerName}'s Store</div>



        <div className="test">
          <div id='' className="test">
            <div className="">
              <NavLink to={`/products/${product?.id}`}>
                <img
                  src={product?.image[0]}
                  alt=""
                  className="cart-img-cart"
                />
              </NavLink>
            </div>
            <div>
              <button id='remove-butt-shopping-cart' onClick={removeItem}>
                <i className="fa-solid fa-x"></i> Remove
              </button>
            </div>
          </div>
          <div className="">
            <div>{product.name}</div>
            <div>Quantity</div>
            <label>
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

        <div className="">
          <div>${price}</div>
          <div className="red">Only {product.quantity} available</div>
          {/* <div>3 sold in the past 24 hours</div> */}
        </div>
      </div>







      <div id='right-panel-individual-item-cart'>
        <div className="test">
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
        <div className="">
          <div>Item(s) total</div>
          <div>${itemTotal}</div>
        </div>
        <div className="">
          <div>Shop discount</div>
          <div>-${discount}</div>
        </div>
        <div className="">
          <div>Subtotal</div>
          <div>${subtotal}</div>
        </div>
        <div className="">
          <div>Shipping</div>
          <div>${shipping}</div>
        </div>
        <div className="">
          <div>Total (1 item)</div>
          <div>${total}</div>
        </div>
        <div id='order-up-butt' className="">
          <OpenModalButton
            buttonStyle="black-button"
            buttonText="Order up!"
            modalComponent={
              <OrderCompleteModal
                product={product}
                purchaseQuantity={purchaseQuantity}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
