import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productsReducer";
import { ProductCard } from "../ProductCard";

export const  AllProducts = () => {
      const dispatch = useDispatch()

      // dispatch(fetchProducts())
      // const products = fetchProducts()

      const products = useSelector((state) => (state.products ? state.products : {} ))


      useEffect(() => {
            dispatch(fetchProducts())
      }, [dispatch])

      console.log("in component", products);

      if (!products.length) return null

      return (

            <div>
                  <div id='filter-holder'>
                        <div>
                              Jewelry & Accessories
                        </div>
                        <div>
                              Clothing & Shoes
                        </div>
                        <div>
                              Home & Living
                        </div>
                        <div>
                              Wedding & Party
                        </div>
                        <div>
                              Toys & Entertainment
                        </div>
                        <div>
                              Art & Collectibles
                        </div>
                        <div>
                              Craft Supplies
                        </div>
                        <div>
                              Gifts & Cards
                        </div>

                  </div>

                  <div id='productCard-holder'>
                        {/* {products} */}
                        {products.map((product) => (
                              <ProductCard product={product} key={product.id} />
                        ))}

                  </div>

            </div>

      )
}
