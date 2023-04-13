import React from "react";

function MemeImage(props) {
  const { topText, bottomText, randomImage } = props.meme;
  return (
    <div className="meme-image-container">
      <div className="image-container">
        <img src={randomImage} />
      </div>
      <div className="image-top-text">{topText}</div>
      <div className="image-bottom-text">{bottomText}</div>
    </div>
  );
}

export default MemeImage;
