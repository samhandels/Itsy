import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);


	return (
		<ul className="main-nav-bar">
			<li>
				<NavLink exact to="/">Itsy</NavLink>
			</li>
			<li className="SearchBar">
				<div>
					<input type="text"
						placeholder="Search for anything"
					// onChange={handleChange}
					// value={searchInput}
					/>
					<i class="fa-solid fa-magnifying-glass"></i>
				</div>
			</li>
			<li>
				<i class="fa-regular fa-heart"></i>
				{isLoaded && (<ProfileButton user={sessionUser} />)}
				<i class="fa-solid fa-store"></i>
				<i class="fa-regular fa-user"></i>
				<i class="fa-solid fa-cart-shopping"></i>
			</li>
		</ul>
	);
}

export default Navigation;
