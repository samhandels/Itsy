import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productsReducer";
import { ProductCard } from "../ProductCard";
import './styleAllProducts.css'
import BlogSection from "../Blog";
import { getAllFavorites } from "../../store/favoritesReducer";

export const  AllProducts = () => {
      const dispatch = useDispatch()

      const productsObj = useSelector((state) => (state.products ? state.products : {}))

      const favorites = useSelector((state) => state.favorites.favorites);

      const [filter, setFilter] = useState("");


      useEffect(() => {
            dispatch(fetchProducts())
      }, [dispatch])

      useEffect(() => {
            dispatch(getAllFavorites())
        }, [dispatch])


      if (!productsObj) return null

      const singleProdKey = "singleProduct"
      delete productsObj[singleProdKey]
      const products = Object.values(productsObj)

      if (!products.length) return null

      return (

            <div>
                  <div id='filter-holder-AllProducts'>
                        <div className="filter-AllProducts" onClick={(e) => setFilter("Jewelry")}>
                              <div>Jewelry & Accessories</div>
                              {filter === "Jewelry" ? <div id="iconic-active"></div> : null}
                        </div>
                        <div className="filter-AllProducts" onClick={(e) => setFilter("Clothing")}>
                              <div>Clothing & Shoes</div>
                              {filter === "Clothing" ? <div id="iconic-active"></div> : null}
                        </div>
                        <div className="filter-AllProducts" onClick={(e) => setFilter("Home")}>
                              <div>Home & Living</div>
                              {filter === "Home" ? <div id="iconic-active"></div> : null}
                        </div>
                        <div className="filter-AllProducts" onClick={(e) => setFilter("Wedding")}>
                              <div>Wedding & Party</div>
                              {filter === "Wedding" ? <div id="iconic-active"></div> : null}
                        </div>
                        <div className="filter-AllProducts" onClick={(e) => setFilter("Toys")}>
                              <div>Toys & Entertainment</div>
                              {filter === "Toys" ? <div id="iconic-active"></div> : null}
                        </div>
                        <div className="filter-AllProducts" onClick={(e) => setFilter("Art")}>
                              <div>Art & Collectibles</div>
                              {filter === "Art" ? <div id="iconic-active"></div> : null}
                        </div>
                        <div className="filter-AllProducts" onClick={(e) => setFilter("Craft")}>
                              <div>Craft Supplies</div>
                              {filter === "Craft" ? <div id="iconic-active"></div> : null}
                        </div>
                        <div className="filter-AllProducts" onClick={(e) => setFilter("Gifts")}>
                              <div>Gifts & Cards</div>
                              {filter === "Gifts" ? <div id="iconic-active"></div> : null}
                        </div>

                  </div>

                  {filter === "" ? null : (
                        <div id="filter-reset" onClick={(e) => setFilter("")}>
                        See All Products
                        </div>
                  )}

                  <div id='sales-banner-AllProducts'>
                        <div id='up-to-AllProducts'>
                              Up to 50% off
                        </div>
                        <div id='labor-day-AllProducts'>
                              The Labor Day Sales Event is here!
                        </div>
                        <div id='shop-button-AllProducts'>
                              Shop now
                        </div>
                        <div id='terms-AllProducts'>
                              Participating sellers only. Terms apply.
                        </div>
                  </div>

                  <div id='productCard-holder-AllProducts'>
                        {/* {products} */}
                        {products
                              .filter((spot) => {
                                    return filter === "" ? spot : spot.category == filter;
                              })
                              .map((product) => (
                                    <ProductCard product={product} key={product.id} />
                              ))}

                  </div>
                  <BlogSection />
            </div>

      )
}
