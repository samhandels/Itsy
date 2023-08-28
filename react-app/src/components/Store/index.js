import React from "react";
import { NavLink } from "react-router-dom";

export function Store() {
  return (
    <div>
    <h1>My Itsy Store</h1>
      <NavLink className="black-button" to="/products/new">
        Create a new product
      </NavLink>
    </div>
  );
}
