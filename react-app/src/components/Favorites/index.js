import React from 'react';
import './Favorites.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const FavoritesPage = () => {
    const currentUser = useSelector((state) => state.session.user);
    const favorites = useSelector((state) => state.favorites);


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
