import React from "react";
import logo from "../logo.svg";
import "./index.css";
function Header() {
  return (
    <header>
      <nav className="navBar">
        <img
          // can add height width property without inline styling.
          width="50px"
          src={logo}
        ></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
