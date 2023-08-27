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
				<NavLink className="itsy-logo" exact to="/">Itsy</NavLink>
			</li>
			<li className="search-bar">
					<input
						className="search-bar-input"
						type="text"
						placeholder="Search for anything"
					// onChange={handleChange}
					// value={searchInput}
					/>
					<i class="fa-solid fa-magnifying-glass"></i>

			</li>
			<li className="nav-bar-links">
				<i class="fa-regular fa-heart"></i>
				<i class="fa-solid fa-store"></i>
				{isLoaded && (<ProfileButton className="profile-button" user={sessionUser} />)}
				<i class="fa-solid fa-cart-shopping"></i>
			</li>
		</ul>
	);
}

export default Navigation;
