import React from "react";
import "./Navbar.css";
import airbnb from "../resources/Vector.png";

export default function Navbar() {
  return (
    <nav className="nav--container">
      <img className="icon" src={airbnb}></img>
    </nav>
  );
}
