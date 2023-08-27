import React from "react";
import "./AllShoppingCartItems.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getSpotReviewsThunk } from "../../../store/reviews";
// import SingleReview from "../SingleReview";
// import OpenModalButton from "../../OpenModalButton";
// import ReviewFormModal from "../ReviewFormModal";

export default function AllShoppingCartItems({ spot }) {
  // const spotId = spot.id;
  // const reviews = Object.values(
  //   useSelector((state) => (state.reviews.spot ? state.reviews.spot : []))
  // );
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getSpotReviewsThunk(spotId));
  // }, [dispatch]);

  // const sessionUser = useSelector((state) => state.session.user);
  // //if the user have posted on this spot already, hide the post your view button with the popup Modal
  // let posted = "";
  // let sessionUserReview = reviews.find(
  //   (review) => review.userId === sessionUser?.id
  // );
  // if (sessionUserReview) posted = "hide";

  // let notposted = "hide";
  // //If no reviews have been posted yet and the current user is logged-in and is NOT the owner of the spot, replace the reviews list with the text "Be the first to post a review!"
  // if (reviews.length === 0 && sessionUser && sessionUser.id !== spot.ownerId)
  //   notposted = "";

  // if (!reviews) return null;
  // if (!sessionUser) return null;
  return (
    <div className="components-border">
      <h1>{} shopping cart</h1>
    </div>
  );
}
