import React from "react";
import "./AllShoppingCartItems.css";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getSpotReviewsThunk } from "../../../store/reviews";
// import SingleReview from "../SingleReview";
// import OpenModalButton from "../../OpenModalButton";
// import ReviewFormModal from "../ReviewFormModal";

export default function SingleItems({ spot }) {
  // const spotId = spot.id;
  // const reviews = Object.values(
  //   useSelector((state) => (state.reviews.spot ? state.reviews.spot : []))
  // );
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getSpotReviewsThunk(spotId));
  // }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);
 

  // if (!reviews) return null;
  if (!sessionUser) return null;
  return (
    <div className="components-border">
      <div className="item_container"></div>
        <h1>Hello {sessionUser.username}, {} items in your shopping cart</h1>
        <div ></div>
        <div className="price_container"></div>
    </div>
  );
}

