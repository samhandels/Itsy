import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchProducts } from "../../store/productsReducer";
import { ProductCard } from "../ProductCard";
import './FilteredProducts.css'
import BlogSection from "../Blog";
import { getAllFavorites } from "../../store/favoritesReducer";


export const FilteredProducts = () => {
    const search = useParams().searchInput;
    const dispatch = useDispatch()
    let searchProducts = []

    const productsObj = useSelector((state) => (state.products ? state.products : {}))
    const state = useSelector((state) => state)
    const prodArray = Object.values(productsObj)
    const favorites = useSelector((state) => state.favorites.favorites);
    if (search) {
        prodArray.filter((product) => {
            if (product.description.toLowerCase().search(search.toLowerCase()) !== -1) {
                searchProducts.push(product)
            } else if (product.name.toLowerCase().search(search.toLowerCase()) !== -1) {
                searchProducts.push(product)
            }
        })
    }



    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllFavorites())
    }, [dispatch])


    if (!productsObj) return null

    const singleProdKey = "singleProduct"
    delete productsObj[singleProdKey]

    if (!searchProducts.length) return null

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
                {searchProducts.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}

            </div>
            <BlogSection />
        </div>

    )
}
