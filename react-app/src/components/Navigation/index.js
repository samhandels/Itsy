import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { getAllReviews } from "../../store/reviewsReducer";

function Navigation({ isLoaded }) {
	const dispatch = useDispatch()
	const sessionUser = useSelector((state) => state.session.user);

	useEffect(() => {
		dispatch(getAllReviews())
	})

	return (
		<div className="main-nav-bar">
			<div>
				<NavLink className="itsy-logo" exact to="/">
					Itsy
				</NavLink>
			</div>
			<div className="search-bar">
				<input
					className="search-bar-input"
					type="text"
					placeholder="Search for anything"
				// onChange={handleChange}
				// value={searchInput}
				/>
				<i className="fa-solid fa-magnifying-glass"></i>
			</div>
			<div className="nav-bar-links">
				<NavLink exact to="/favorites">
					<i className="nav-link fa-regular fa-heart"></i>
				</NavLink>
				<NavLink exact to="/store"><i className="nav-link fa-solid fa-store"></i></NavLink>
				{isLoaded && (
					<ProfileButton className="nav-link profile-button" user={sessionUser} />
				)}
				<NavLink exact to="/shopping_cart/current">
					<i className="nav-link fa-solid fa-cart-shopping"></i>
				</NavLink>
			</div>
		</div>
	);
}

export default Navigation;
