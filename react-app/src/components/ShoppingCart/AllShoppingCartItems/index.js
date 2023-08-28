import React from "react";
import "./AllShoppingCartItems.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../store/productsReducer"
import { getItemsThunk } from "../../../store/shoppingCartReducer";
import SingleItem from "../SingleItem";


export default function AllShoppingCartItems() {
  const items = Object.values(
    useSelector((state) => (state.items ? state.items : []))
  );

  // console.log("*********************the items from useSelector in component**************", items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);

  if (!items) return null;
  if (!sessionUser) return null;
  return (
    <div className="components-border">
      <section className="components-border">Nav</section>
      <section className="shopping-cart container components-border">
      <h1>Hello {sessionUser.username}, {} items in your shopping cart</h1>
        {items.map((item)=>(
        <div className="cart_item" key={item.id}>
          <div>
             <SingleItem item={item} />
          </div>
        </div>
                ))}
      </section>
      <section className="components-border">Footer</section>
    </div>
  );
}



