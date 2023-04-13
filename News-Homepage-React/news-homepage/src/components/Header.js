import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <nav className="header--container">
      <img className="logo" src="./images/logo.svg" />
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
  );
}

export default Header;
