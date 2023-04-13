import React from "react";
import email from "../resources/Icon.png";
import "./Button.css";
export default function Button() {
  return (
    <div className="button--container">
      <img className="icon" src={email}></img>
      <span className="icon--text">Email</span>
    </div>
  );
}
