import React, { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import MemeImage from "./MemeImage";
import memeData from "./memeData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => setAllMemes(res.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function generateMemeImage() {
    const randomIndex = Math.floor(Math.random() * (allMemes.length - 1));
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemes[randomIndex].url,
    }));
  }

  return (
    <div class="meme-container">
      <Header />
      <Form
        meme={meme}
        handleChange={handleChange}
        generateMemeImage={generateMemeImage}
      />
      <MemeImage meme={meme} />
    </div>
  );
}

export default Meme;
