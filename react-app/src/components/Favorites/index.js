import React from "react";
import "./Favorites.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../ProductCard";
import { getAllFavorites } from "../../store/favoritesReducer";
import { useHistory } from "react-router-dom";

const FavoritesPage = () => {
  const currentUser = useSelector((state) => state.session.user);
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const history = useHistory();

  const [filter, setFilter] = useState("");
  // console.log("favorites -------------", favorites)

  const handleCategoryRedirect = (category) => {
    history.push(`/products/search/${category}`);
  };

  let favArr = Object.values(favorites);
  // console.log("fav Arr ---------------", favArr)

  useEffect(() => {
    dispatch(getAllFavorites(currentUser));
  }, [dispatch]);

  if (!favArr.length)
    return (
      <div id="favorites-entire-page">
        <div id="favorites-inner-div">
          <div id="my-favorites-sign">{currentUser.firstName}'s Favorites</div>
          <div id="favorites-line"></div>

          <div id="favorites-butt">
            {`Favorite Items  ${favArr.length}`}
          </div>

          <div className="fav-products-holder">
            <div id="empty-fav-Favorites">
              You currently don't have any favorite products.
            </div>
          </div>

          <div className="suggested-categories-fav">
            <div id="category-title-Favorites">
              Categories we think you'll love
            </div>
            <div className="Collection-Categories-fav">
              <div
                className="Collection-Category-Outer-Div"
                onClick={() => handleCategoryRedirect("Toys")}
              >
                <div className="Photo-Div">
                  <div className="Photo-Div-Left">
                    <img
                      id="collection-image"
                      className="LeftUpper-Photo"
                      src="https://i.etsystatic.com/9433423/r/il/d4a8bb/2857074970/il_794xN.2857074970_es2x.jpg"
                    ></img>
                    <img
                      id="collection-image"
                      className="LeftLower-Photo"
                      src="https://i.etsystatic.com/9302583/r/il/d2643a/791376408/il_340x270.791376408_8j0p.jpg"
                    ></img>
                  </div>
                  <div className="Photo-Div-Right">
                    <img
                      id="collection-image"
                      className="RightUpper-Photo"
                      src="https://i.etsystatic.com/6570822/r/il/02a6d2/1027251046/il_340x270.1027251046_d3dn.jpg"
                    ></img>
                    <img
                      id="collection-image"
                      className="RightLower-Photo"
                      src="https://i.etsystatic.com/11356515/r/il/bad65e/1729830145/il_340x270.1729830145_2ytt.jpg"
                    ></img>
                  </div>
                </div>

                <h3>Toys</h3>
              </div>

              <div
                className="Collection-Category-Outer-Div"
                onClick={() => handleCategoryRedirect("Gifts")}
              >
                <div className="Photo-Div">
                  <div className="Photo-Div-Left">
                    <img
                      id="collection-image"
                      className="LeftUpper-Photo"
                      src="https://i.etsystatic.com/6193770/c/1091/867/0/125/il/841cd5/4423926777/il_340x270.4423926777_3lzq.jpg"
                    ></img>
                    <img
                      id="collection-image"
                      className="LeftLower-Photo"
                      src="https://i.etsystatic.com/21534681/r/il/6646c3/3170252479/il_340x270.3170252479_p377.jpg"
                    ></img>
                  </div>
                  <div className="Photo-Div-Right">
                    <img
                      id="collection-image"
                      className="RightUpper-Photo"
                      src="https://i.etsystatic.com/6547773/c/1883/1503/315/290/il/d570fd/3060630974/il_340x270.3060630974_2no2.jpg"
                    ></img>
                    <img
                      id="collection-image"
                      className="RightLower-Photo"
                      src="https://i.etsystatic.com/27552644/r/il/026491/2873601260/il_600x600.2873601260_cpon.jpg"
                    ></img>
                  </div>
                </div>

                <h3>Gifts</h3>
              </div>

              <div
                className="Collection-Category-Outer-Div"
                onClick={() => handleCategoryRedirect("Home")}
              >
                <div className="Photo-Div">
                  <div className="Photo-Div-Left">
                    <img
                      id="collection-image"
                      className="LeftUpper-Photo"
                      src="https://i.etsystatic.com/8950379/r/il/fab0f8/2291039261/il_340x270.2291039261_n4s0.jpg"
                    ></img>
                    <img
                      id="collection-image"
                      className="LeftLower-Photo"
                      src="https://i.etsystatic.com/11578147/r/il/e0d6a6/3779621232/il_340x270.3779621232_5x47.jpg"
                    ></img>
                  </div>
                  <div className="Photo-Div-Right">
                    <img
                      id="collection-image"
                      className="RightUpper-Photo"
                      src="https://i.etsystatic.com/8950379/r/il/f2cc4a/2053506564/il_340x270.2053506564_lgkr.jpg"
                    ></img>
                    <img
                      id="collection-image"
                      className="RightLower-Photo"
                      src="https://i.etsystatic.com/6590135/r/il/b0297d/1882787478/il_340x270.1882787478_g3d4.jpg"
                    ></img>
                  </div>
                </div>

                <h3>Home</h3>
              </div>

              <div
                className="Collection-Category-Outer-Div"
                onClick={() => handleCategoryRedirect("Craft")}
              >
                <div className="Photo-Div">
                  <div className="Photo-Div-Left">
                    <img
                      id="collection-image"
                      className="LeftUpper-Photo"
                      src="https://i.etsystatic.com/12316004/r/il/ec4a06/3824920921/il_340x270.3824920921_1i8f.jpg"
                    ></img>
                    <img
                      id="collection-image"
                      className="LeftLower-Photo"
                      src="https://i.etsystatic.com/6209980/r/il/bc4f6a/929691343/il_340x270.929691343_ce5m.jpg"
                    ></img>
                  </div>
                  <div className="Photo-Div-Right">
                    <img
                      id="collection-image"
                      className="RightUpper-Photo"
                      src="https://i.etsystatic.com/6274911/r/il/01e713/1215696500/il_340x270.1215696500_mk6l.jpg"
                    ></img>
                    <img
                      id="collection-image"
                      className="RightLower-Photo"
                      src="https://i.etsystatic.com/5147933/c/1080/858/0/216/il/ef680f/2541455442/il_340x270.2541455442_nfma.jpg"
                    ></img>
                  </div>
                </div>

                <h3>Crafts</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div id="favorites-entire-page">
      <div id="favorites-inner-div">
        <div id="my-favorites-sign">{currentUser.username}'s Favorites</div>
        <div id="favorites-line"></div>

        <div id="favorites-butt">
        {`Favorite Items (${favArr.length})`}
        </div>

        <div className="fav-products-holder">
          <div className="fav-products-list">
            {favArr.map((fav) => (
              <ProductCard product={fav.product} key={fav.product.id} />
            ))}
          </div>
        </div>

        <div className="suggested-categories-fav">
          <h1>Categories we think you'll love</h1>
          <div className="Collection-Categories-fav">
            <div
              className="Collection-Category-Outer-Div"
              onClick={() => handleCategoryRedirect("Toys")}
            >
              <div className="Photo-Div">
                <div className="Photo-Div-Left">
                  <img
                    id="collection-image"
                    className="LeftUpper-Photo"
                    src="https://i.etsystatic.com/9433423/r/il/d4a8bb/2857074970/il_794xN.2857074970_es2x.jpg"
                  ></img>
                  <img
                    id="collection-image"
                    className="LeftLower-Photo"
                    src="https://i.etsystatic.com/9302583/r/il/d2643a/791376408/il_340x270.791376408_8j0p.jpg"
                  ></img>
                </div>
                <div className="Photo-Div-Right">
                  <img
                    id="collection-image"
                    className="RightUpper-Photo"
                    src="https://i.etsystatic.com/6570822/r/il/02a6d2/1027251046/il_340x270.1027251046_d3dn.jpg"
                  ></img>
                  <img
                    id="collection-image"
                    className="RightLower-Photo"
                    src="https://i.etsystatic.com/11356515/r/il/bad65e/1729830145/il_340x270.1729830145_2ytt.jpg"
                  ></img>
                </div>
              </div>

              <h3>Toys</h3>
            </div>

            <div
              className="Collection-Category-Outer-Div"
              onClick={() => handleCategoryRedirect("Gifts")}
            >
              <div className="Photo-Div">
                <div className="Photo-Div-Left">
                  <img
                    id="collection-image"
                    className="LeftUpper-Photo"
                    src="https://i.etsystatic.com/6193770/c/1091/867/0/125/il/841cd5/4423926777/il_340x270.4423926777_3lzq.jpg"
                  ></img>
                  <img
                    id="collection-image"
                    className="LeftLower-Photo"
                    src="https://i.etsystatic.com/21534681/r/il/6646c3/3170252479/il_340x270.3170252479_p377.jpg"
                  ></img>
                </div>
                <div className="Photo-Div-Right">
                  <img
                    id="collection-image"
                    className="RightUpper-Photo"
                    src="https://i.etsystatic.com/6547773/c/1883/1503/315/290/il/d570fd/3060630974/il_340x270.3060630974_2no2.jpg"
                  ></img>
                  <img
                    id="collection-image"
                    className="RightLower-Photo"
                    src="https://i.etsystatic.com/27552644/r/il/026491/2873601260/il_600x600.2873601260_cpon.jpg"
                  ></img>
                </div>
              </div>

              <h3>Gifts</h3>
            </div>

            <div className="Collection-Category-Outer-Div">
              <div className="Photo-Div">
                <div
                  className="Photo-Div-Left"
                  onClick={() => handleCategoryRedirect("Home")}
                >
                  <img
                    id="collection-image"
                    className="LeftUpper-Photo"
                    src="https://i.etsystatic.com/8950379/r/il/fab0f8/2291039261/il_340x270.2291039261_n4s0.jpg"
                  ></img>
                  <img
                    id="collection-image"
                    className="LeftLower-Photo"
                    src="https://i.etsystatic.com/11578147/r/il/e0d6a6/3779621232/il_340x270.3779621232_5x47.jpg"
                  ></img>
                </div>
                <div className="Photo-Div-Right">
                  <img
                    id="collection-image"
                    className="RightUpper-Photo"
                    src="https://i.etsystatic.com/8950379/r/il/f2cc4a/2053506564/il_340x270.2053506564_lgkr.jpg"
                  ></img>
                  <img
                    id="collection-image"
                    className="RightLower-Photo"
                    src="https://i.etsystatic.com/6590135/r/il/b0297d/1882787478/il_340x270.1882787478_g3d4.jpg"
                  ></img>
                </div>
              </div>

              <h3>Home</h3>
            </div>

            <div
              className="Collection-Category-Outer-Div"
              onClick={() => handleCategoryRedirect("Craft")}
            >
              <div className="Photo-Div">
                <div className="Photo-Div-Left">
                  <img
                    id="collection-image"
                    className="LeftUpper-Photo"
                    src="https://i.etsystatic.com/12316004/r/il/ec4a06/3824920921/il_340x270.3824920921_1i8f.jpg"
                  ></img>
                  <img
                    id="collection-image"
                    className="LeftLower-Photo"
                    src="https://i.etsystatic.com/6209980/r/il/bc4f6a/929691343/il_340x270.929691343_ce5m.jpg"
                  ></img>
                </div>
                <div className="Photo-Div-Right">
                  <img
                    id="collection-image"
                    className="RightUpper-Photo"
                    src="https://i.etsystatic.com/6274911/r/il/01e713/1215696500/il_340x270.1215696500_mk6l.jpg"
                  ></img>
                  <img
                    id="collection-image"
                    className="RightLower-Photo"
                    src="https://i.etsystatic.com/5147933/c/1080/858/0/216/il/ef680f/2541455442/il_340x270.2541455442_nfma.jpg"
                  ></img>
                </div>
              </div>

              <h3>Crafts</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
