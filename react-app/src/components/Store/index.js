import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProducts } from "../../store/productsReducer";
import { ProductCard } from "../ProductCard";
import { ProductForm } from "../ProductForm";
import OpenModalButton from "../OpenModalButton";
import { DeleteProductsModal } from "../DeleteProductsModal";
import './styleStore.css'
import { useHistory } from "react-router-dom";

export const Store = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const productsObj = useSelector((state) => (state.products ? state.products : {}))

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!productsObj) return null

  const singleProdKey = "singleProduct"
  delete productsObj[singleProdKey]
  const products = Object.values(productsObj)

  const product = products.filter((prod) => prod.ownerId === sessionUser.id);

  const create = () => {
      history.replace('/products/new')
  }

  if (!product) return null;

  return (
    <div id='storefront-entire-page'>
      <div id='storefront-inner-div'>
      <div id='my-storefront-sign'>{sessionUser.firstName}'s Storefront</div>
      <div id='store-line'></div>
      <NavLink id='storefront-butt' to="/products/new">
        Create a new product
      </NavLink>

      <div id="productCard-holder-AllProducts">
        {product.length
          ? product.map((prod) => (
            <div>
              <ProductCard product={prod} key={prod.id} />

              <NavLink exact to={`/products/update/${prod.id}`}>
                <button id="updateButtManPage">Update</button>
              </NavLink>

              <OpenModalButton
                buttonText="Delete"
                modalComponent={<DeleteProductsModal productId={prod.id} />}
              />
            </div>
          ))
          : null}
      </div>

      {/* <div onClick={create} id='create-butt-bottom-storefront'>Create a New Product</div> */}


      </div>
    </div>
  );
};
