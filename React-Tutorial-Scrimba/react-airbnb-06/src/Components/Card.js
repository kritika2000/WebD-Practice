import React from "react";
import "./Card.css";
import star from "../resources/star.png";

// import image from "../resources/image 12.png";
// To use relative url for images put images inside public folder.
// https://stackoverflow.com/questions/72606910/images-not-loading-when-relative-path-is-used-in-react

export default function Hero(props) {
  // const { img, rating, reviewCount, location, title, price, openSpot } = props;
  console.log(props);
  let badgeText;
  if (props.openSpot === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card--container">
      <img className="image" src={`/resources/${props.coverImg}`} />
      {badgeText && <button className="status">{badgeText}</button>}
      <div className="review--container">
        <img className="logo" src={"/resources/star.png"} />
        <span className="rating">{props.stats.rating}</span>
        <span className="reviewCount">{`(${props.stats.reviewCount})`}</span>
        <span className="dot"></span>
        <span className="location">{props.location}</span>
      </div>
      <p className="title">{props.title}</p>
      <span className="cost">
        <b>From ${props.price}</b> / person
      </span>
    </div>
  );
}
