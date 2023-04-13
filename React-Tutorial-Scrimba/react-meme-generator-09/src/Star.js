import React, { useState } from "react";

export default function Star(props) {
  return (
    <img
      src={
        props.isFavorite ? "/images/star-filled.png" : "/images/star-empty.png"
      }
      className="card--favorite"
      onClick={props.toggleFavorite}
    />
  );
}
