import React from "react";
import "./AllShoppingCartItems.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getItemsThunk } from "../../../store/shoppingCartReducer";
import SingleItem from "../SingleItem";

export default function AllShoppingCartItems() {
  const items = Object.values(
    useSelector((state) => (state.items ? state.items : []))
  );
  const products = Object.values(
    useSelector((state) => (state.products ? state.products : []))
  ); //because you come from landing page, the state would have products already
  // console.log("*********************the items from useSelector in component**************", items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);

  if (!items) return null;
  if (!sessionUser) return null;
  return (
    <div className="shopping-cart components-border">
      <div>
        Hello {sessionUser.username}, {items.length} items in your shopping cart
      </div>

      <section className="item-cards">
        {items.map((item) => {
          const product = products.find((product) => {
            return item.productId === product.id;
          });
          return (
            <div className="cart_item" key={item.id}>
              <div>
                <SingleItem item={item} product={product} />
              </div>
            </div>
          );
        })}
      </section>
      {/* <section className="item-cards">
        {items.map((item) => {
          const product = products.find((product) => item.productId === product.id);
          if(!product){
          return (
            <div className="cart_item" key={.id}>
              <div>
                <SingleItem item={item} product={product} />
              </div>
            </div>
          );
          }
          if(product)
        })}
      </section> */}
    </div>
  );
}
