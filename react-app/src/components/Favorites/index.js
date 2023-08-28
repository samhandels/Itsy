import React from 'react';
import './Favorites.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../ProductCard";
import { getAllFavorites } from '../../store/favoritesReducer';

const FavoritesPage = () => {
    const currentUser = useSelector((state) => state.session.user);
    const favorites = useSelector((state) => state.favorites.favorites);
    const dispatch = useDispatch()
    // console.log("favorites -------------", favorites)

    let favArr = Object.values(favorites)
    // console.log("fav Arr ---------------", favArr)

    useEffect(() => {
        dispatch(getAllFavorites())
    }, [dispatch])
    if (!favArr.length) return null

    return (
        <>
            <div>
                <h1>{currentUser.username}'s Favorites</h1>
            </div>
            <div>
                <h2>
                    Favorite Items
                    <span>({favArr.length})</span>
                </h2>
            </div>
            <div className='fav-products-holder'>
                <div className='fav-products-list'>
                    {favArr.map((fav) => (
                        <ProductCard product={fav.product} key={fav.product.id} />
                        ))}
                </div>
            </div>
        </>
    );
}

export default FavoritesPage;
