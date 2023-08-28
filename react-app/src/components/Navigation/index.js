import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

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
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-store"></i>
        {isLoaded && (
          <ProfileButton className="profile-button" user={sessionUser} />
        )}
        <NavLink exact to="/shopping_cart/current">
          <i className="fa-solid fa-cart-shopping"></i>
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
