import React from "react";
import "./AllShoppingCartItems.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getItemsThunk } from "../../../store/shoppingCartReducer";
import { fetchProducts } from "../../../store/productsReducer";
import SingleItem from "../SingleItem";
import { DiscoverItems } from "../DiscoverItems";

export default function AllShoppingCartItems() {
  const items = Object.values(
    useSelector((state) => (state.items ? state.items : []))
  ); //items are not unique, there can be several same product in the item table
  console.log(
    "**********************Items from all items in shopping cart******************",
    items
  );
  const products = Object.values(
    useSelector((state) => (state.products ? state.products : []))
  ); //because you come from landing page, the state would have products already
  // console.log("*********************the items from useSelector in component**************", items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsThunk());
    dispatch(fetchProducts()); //so all products are still on the shopping cart refreshing the page
  }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);

  let itemProductIdArray = items.map((item) => item.productId);
  let uniqueProductIdArray = [...new Set(itemProductIdArray)]; //get the unique product for the cart
  //productItem is the unique card showing in the shopping cart
  let productItemArray = uniqueProductIdArray.map((id) => {
    return products.find((product) => product?.id === id); //create the productItem card for the cart
  });

  // console.log(  "**********************unique product ID Array******************", uniqueProductIdArray)
  // console.log(  "**********************unique product Array******************", productItemArray)
  if (!items) return null;
  if (!products) return null;
  if (!sessionUser) return null;
  return (
    <div className="shopping-cart components-border">
      <div className="greeting">
        Hello {sessionUser.username}, {productItemArray.length} items in your
        shopping cart
      </div>

      <section className="item-cards">
        {/* productItem is the unique card showing in the shopping cart */}
        {productItemArray.map((uniqueProduct) => {
          //get the product for the uniq item
          const productInCartNum = items.filter(
            (item) => item.productId === uniqueProduct?.id
          ).length; //find out how many number of the same  product in the shopping cart
          {
            /* let itemIdSameProductArray = items.filter((item) => item.productId);  */
          }

          return (
            <div className="cart_item" key={uniqueProduct?.id}>
              <div>
                <SingleItem
                  product={uniqueProduct}
                  productInCartNum={productInCartNum}
                />
              </div>
            </div>
          );
        })}
      </section>
      <section className="discover-item-cards">
        <DiscoverItems />
      </section>
    </div>
  );
}
