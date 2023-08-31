import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProducts } from "../../store/productsReducer";
import { ProductCard } from "../ProductCard";
import { ProductForm } from "../ProductForm";
import OpenModalButton from "../OpenModalButton";
import { DeleteProductsModal } from "../DeleteProductsModal";

export const Store = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const allProducts = Object.values(
    useSelector((state) => (state.products ? state.products : {}))
  );

  console.log("ALL PRODUCTS", allProducts)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!allProducts.length) return null;

  const product = allProducts.filter((prod) => prod.ownerId === sessionUser.id);

  if (!allProducts) return null;

  return (
    <div>
      <h1>My Itsy Store</h1>
      <NavLink className="black-button" to="/products/new">
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
    </div>
  );
};
