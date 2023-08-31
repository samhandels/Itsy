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
        <div id='favorites-entire-page'>
            <div id='favorites-inner-div'>


                <div id='my-favorites-sign'>{currentUser.username}'s Favorites</div>
                <div id='favorites-line'></div>


                <div id='favorites-butt'>
                    Favorite Items
                    <span>({favArr.length})</span>
                </div>

            <div className='fav-products-holder'>
                <div className='fav-products-list'>
                    {favArr.map((fav) => (
                        <ProductCard product={fav.product} key={fav.product.id} />
                        ))}
                </div>
            </div>



            </div>
        </div>
    );
}

export default FavoritesPage;
