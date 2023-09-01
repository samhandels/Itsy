import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/productsReducer";
import { ProductCard } from "../../../components/ProductCard";
import "../../AllProducts/styleAllProducts.css";
// import { getAllFavorites } from "../../../store/favoritesReducer";

export const DiscoverItems = () => {
  //get 4 items from the products, they should exclude the ones that are already in the cart

  const dispatch = useDispatch();
  const products = Object.values(
    useSelector((state) => (state.products ? state.products : {}))
  );

  // let generateRandom = [];

  // function generateUniqueRandom(maxNr) {
  //   //Generate random number
  //   let random = (Math.random() * maxNr).toFixed();

  //   //Coerce to number by boxing
  //   random = Number(random);

  //   if (!generateRandom.includes(random)) {
  //     generateRandom.push(random);
  //     return random;
  //   } else {
  //     if (generateRandom.length < maxNr) {
  //       //Recursively generate number
  //       return generateUniqueRandom(maxNr);
  //     } else {
  //       console.log("No more numbers available.");
  //       return false;
  //     }
  //   }
  // }
  //    for(let i = 0; i < 4; i++){
  //  generateUniqueRandom(products.length);
  // }

  // console.log("***************", generateRandom);

  let discoverFourItems = [0, 1, 2, 3].map((number) => {
    return products[number]
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // useEffect(() => {
  //       dispatch(getAllFavorites())
  //   }, [dispatch])

  if (!products.length) return null;

  return (
    <div>
      <div id="productCard-holder-AllProducts">
        {discoverFourItems.map((product) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </div>
    </div>
  );
};
