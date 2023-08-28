import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productsReducer";
import { ProductCard } from "../ProductCard";
import './styleAllProducts.css'
import BlogSection from "../Blog";

export const  AllProducts = () => {
      const dispatch = useDispatch()

      // dispatch(fetchProducts())
      // const products = fetchProducts()

      const products = useSelector((state) => (state.products ? state.products : {} ))


      useEffect(() => {
            dispatch(fetchProducts())
      }, [dispatch])


      if (!products.length) return null

      return (

            <div>
                  <div id='filter-holder-AllProducts'>
                        <div className="filter-AllProducts">
                              Jewelry & Accessories
                        </div>
                        <div className="filter-AllProducts">
                              Clothing & Shoes
                        </div>
                        <div className="filter-AllProducts">
                              Home & Living
                        </div>
                        <div className="filter-AllProducts">
                              Wedding & Party
                        </div>
                        <div className="filter-AllProducts">
                              Toys & Entertainment
                        </div>
                        <div className="filter-AllProducts">
                              Art & Collectibles
                        </div>
                        <div className="filter-AllProducts">
                              Craft Supplies
                        </div>
                        <div className="filter-AllProducts">
                              Gifts & Cards
                        </div>

                  </div>

                  <div id='productCard-holder-AllProducts'>
                        {/* {products} */}
                        {products.map((product) => (
                              <ProductCard product={product} key={product.id} />
                        ))}

                  </div>
                  <BlogSection />
            </div>

      )
}
