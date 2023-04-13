import React, { useState } from "react";
import "./Meme.css";
import memeData from "./memeData";

export default function Meme() {
  const [imageText, setImageText] = useState({
    topText: "",
    bottomText: "",
  });
  const memes = memeData.data.memes;
  const [randomImage, setRandomImage] = useState("");
  function generateRandomImage() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    setRandomImage(memes[randomIndex].url);
    console.log(imageText);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setImageText((prevImageText) => {
      return {
        ...prevImageText,
        [name]: value,
      };
    });
  }
  return (
    <>
      <div className="form--container">
        <input
          placeholder="Top text"
          type="text"
          name="topText"
          value={imageText.topText}
          onChange={handleChange}
        />

        <input
          placeholder="Bottom text"
          type="text"
          name="bottomText"
          value={imageText.bottomText}
          onChange={handleChange}
        />

        <button onClick={generateRandomImage} className="submit">
          Get a new meme image
        </button>
        {randomImage && (
          <div className="image--container">
            <img className="random--image" src={randomImage} />
            <h1 className="top-text">{imageText.topText}</h1>
            <h1 className="bottom-text">{imageText.bottomText}</h1>
          </div>
        )}
      </div>
    </>
  );
}

//   adding event listeners in React.
// only pass function defination not call the function.
/* onClick={(e) => {
        //   e.preventDefault();
        //   console.log("Button Clicked!");
        // }}
        // onMouseOver={() => console.log("Mouse is over the button!")}
        // onMouseLeave={() => console.log("Mouse removed from the button!")}
        */
