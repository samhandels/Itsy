import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { productDetailThunk } from "../../store/products";
//! need product detail thunk
import { ProductForm } from "../ProductForm/index"

export const UpdateSpotForm = () => {
  let { productId } = useParams();
  
//!need to know the store shape
  const product = useSelector((state) =>
    state.product ? state.product[productId] : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(productDetailThunk(productId));
  }, [dispatch, productId]);

  if (!product) return null;

  return (
    <div className="components-border">
      <ProductForm product={product} formType="Update" />
    </div>
  );
};


