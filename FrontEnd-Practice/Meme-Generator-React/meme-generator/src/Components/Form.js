import React from "react";

function Form(props) {
  const { topText, bottomText } = props.meme;
  return (
    <div className="form-container">
      <form className="form">
        <input
          className="inputTopText"
          placeholder="Enter Top Text"
          type="text"
          value={topText}
          name="topText"
          onChange={(event) => props.handleChange(event)}
        />
        <input
          className="inputBottomText"
          placeholder="Enter Bottom Text"
          type="text"
          value={bottomText}
          name="bottomText"
          onChange={(event) => props.handleChange(event)}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.generateMemeImage(event);
          }}
        >
          Generate Meme
        </button>
      </form>
    </div>
  );
}

export default Form;
