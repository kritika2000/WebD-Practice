import React, { useContext } from "react";
import { Context } from "../Context";
import { Routes, Route, useRoutes, useNavigate } from "react-router-dom";

function Header() {
  const { cartItems } = useContext(Context);
  const navigate = useNavigate();
  return (
    <header>
      <h2
        onClick={() => {
          navigate("/");
        }}
      >
        Pic Some
      </h2>
      {cartItems.length > 0 && (
        <i
          className="fas fa-shopping-cart"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <span>{cartItems.length}</span>
        </i>
      )}
    </header>
  );
}

export default Header;
