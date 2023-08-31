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


    if (!favArr.length)
    return (
            <div>
            <h1>Your Favorites are empty!</h1>
            </div>
    )

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

            <div className='suggested-categories-fav'>
                <h1>Categories we think you'll love</h1>
                <div className='Collection-Categories-fav'>
                    <div>
                        <img id="collection-image" src='https://i.etsystatic.com/9433423/r/il/d4a8bb/2857074970/il_794xN.2857074970_es2x.jpg'></img>
                        <img id="collection-image" src='https://i.etsystatic.com/9302583/r/il/d2643a/791376408/il_340x270.791376408_8j0p.jpg'></img>
                        <img id="collection-image" src='https://i.etsystatic.com/6570822/r/il/02a6d2/1027251046/il_340x270.1027251046_d3dn.jpg'></img>
                        <img id="collection-image" src='https://i.etsystatic.com/11356515/r/il/bad65e/1729830145/il_340x270.1729830145_2ytt.jpg'></img>

                        <h3>Toys</h3>
                    </div>

                    <div>Gifts</div>

                    <div>Home</div>

                    <div>Craft</div>

                </div>
            </div>


            </div>
        </div>
    );
}

export default FavoritesPage;
