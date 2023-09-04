import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/productsReducer";
import { ProductCard } from "../../../components/ProductCard";
import "../../AllProducts/styleAllProducts.css";

export const ItemsSideModal = () => {

  const dispatch = useDispatch();
  const products = Object.values(
    useSelector((state) => (state.products ? state.products : {}))
  );


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  if (!products.length) return null;

  return (
    <div>
      <div id="productCard-holder-AllProducts-2by2">
        {products.map((product) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </div>
    </div>
  );
};
