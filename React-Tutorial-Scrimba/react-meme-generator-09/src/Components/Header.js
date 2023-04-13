import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <img className="nav--icon" src="/images/troll-face.png"></img>
      <h3 className="nav--logo_text">Meme Generator</h3>
      <h4 className="nav--title">React Course - Project 3</h4>
    </nav>
  );
}
