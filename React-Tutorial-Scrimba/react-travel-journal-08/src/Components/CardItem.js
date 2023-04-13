import React from "react";
import "./CardItem.css";

export default function CardItem(props) {
  return (
    <div className="card--container">
      <img className="image" src={`/Images/${props.imageUrl}`}></img>
      <div className="info--container">
        <div className="location--container">
          <span>{props.location}</span>
          <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
        </div>
        <h1 className="title">{props.title}</h1>
        <div className="date">{`${props.startDate} - ${props.endDate}`}</div>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
