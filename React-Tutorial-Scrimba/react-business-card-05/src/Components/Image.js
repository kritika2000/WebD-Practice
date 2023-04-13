import React from "react";
import image from "../resources/Rectangle 90.png";
import "./Image.css";
export default function Image() {
  return (
    <>
      <img className="image" src={image}></img>
      <div className="info--container">
        <h2 className="info--name">Kritika LNU</h2>
        <h4 className="info--title">Frontend Developer</h4>
        <h5 className="info--link">kritika.lnu.website</h5>
      </div>
    </>
  );
}
