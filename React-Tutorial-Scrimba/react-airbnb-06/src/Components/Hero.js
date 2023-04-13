import React from "react";
import "./Hero.css";
import photoGrid from "../resources/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero--container">
      <img className="grid" src={photoGrid}></img>
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--detail">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
