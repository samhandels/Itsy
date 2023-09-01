import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { getAllReviews } from "../../store/reviewsReducer";
import { AllProducts } from "../AllProducts";

function Navigation({ isLoaded }) {
	const dispatch = useDispatch()
	const sessionUser = useSelector((state) => state.session.user);
	const products = useSelector((state) => state.products)
	const [searchInput, setSearchInput] = useState("")
	const prodArray = Object.values(products)
	console.log("PRODUCTS", products)
	const history = useHistory()
	let searchProducts = []

	const handleChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
		if (searchInput.length > 0) {
			prodArray.filter((product) => {
				if (product.description.toLowerCase().search(searchInput.toLowerCase()) !== -1) {
					searchProducts.push(product)
				} else if (product.name.toLowerCase().search(searchInput.toLowerCase()) !== -1) {
					searchProducts.push(product)
				}
			})
		}
	}



	const onClick = (e) => {
		e.preventDefault();
		history.push(`/products/search/${searchInput}`)
	}



	useEffect(() => {
		dispatch(getAllReviews())
	}, [dispatch])

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
					onChange={handleChange}
					value={searchInput}
				/>
				<button onClick={onClick} ><i className="fa-solid fa-magnifying-glass" ></i></button>
			</div>
			<div className="nav-bar-links">
				<NavLink exact to="/favorites">
					<i className="nav-link fa-regular fa-heart"></i>
				</NavLink>
				<NavLink exact to="/store"><i className="nav-link fa-solid fa-store"></i></NavLink>
				<div>
					{isLoaded && (
						<ProfileButton className="nav-link profile-button" user={sessionUser} />
					)}
					<i className="fa-solid fa-circle"></i>
				</div>
				<NavLink exact to="/shopping_cart/current">
					<i className="nav-link fa-solid fa-cart-shopping"></i>
				</NavLink>
			</div>
		</div>
	);
}

export default Navigation;
