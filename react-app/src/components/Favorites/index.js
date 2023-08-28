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
    console.log("favorites -------------", favorites)

    let favArr = Object.values(favorites)

    useEffect(() => {
        dispatch(getAllFavorites())
    }, [dispatch])
    if (!favorites.length) return null

    return (
        <>
            <div>
                <h1>{currentUser.username}'s Favorites</h1>
            </div>
            <div>
                <h2>
                    Favorite Items
                    <span>({favorites.length})</span>
                </h2>
            </div>
            <div>
                {favorites.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </>
    );
}

export default FavoritesPage;
