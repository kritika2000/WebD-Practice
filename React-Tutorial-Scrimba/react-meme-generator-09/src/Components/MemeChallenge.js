/*
 * Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 *
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 *
 * Next, create a new state variable called `allMemeImages`
 * which will default to `memesData`, which we imported above
 *
 * Lastly, update the `getMemeImage` function and the markup
 * to reflect our newly reformed state object and array in the
 * correct way.
 */

import React, { useState, useEffect } from "react";
import "./Meme.css";
import memeData from "./memeData";

export default function Meme() {
  const [meme, updateMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  // const memes = memeData.data.memes;
  const [allMemes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => setMemes(res.data.memes));
  }, []);

  function generateRandomImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    updateMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemes[randomIndex].url,
    }));
  }
  function handleChange(e) {
    const { name, value } = e.target;
    updateMeme((prevImageText) => {
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
          value={meme.topText}
          name="topText"
          onChange={handleChange}
        />
        <input
          placeholder="Bottom text"
          type="text"
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
        />
        <button onClick={generateRandomImage} className="submit">
          Get a new meme image
        </button>
        {meme.randomImage && (
          <div className="image--container">
            <img className="random--image" src={meme.randomImage} />
            <h1 className="top-text">{meme.topText}</h1>
            <h1 className="bottom-text">{meme.bottomText}</h1>
          </div>
        )}
      </div>
    </>
  );
}
