import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import useWordGame from "./useWordGame";

function App() {
  // const [text, setText] = useState("");
  // const [timer, setTimer] = useState(10);
  // const [shouldRunning, setShouldRunning] = useState(false);
  // const [wordCount, setWordCount] = useState(0);
  // const textAreaRef = useRef(null);

  // function handleChange(event) {
  //   setText(event.target.value);
  // }

  // function startGame() {
  //   setTimer(10);
  //   setText("");
  //   setWordCount(0);
  //   setShouldRunning(true);
  //   textAreaRef.current.disabled = false;
  //   textAreaRef.current.focus();
  //   // console.log(textAreaRef.current);
  // }

  // function endGame() {
  //   setWordCount(countWords());
  //   setShouldRunning(false);
  // }

  // useEffect(() => {
  //   // const id = setInterval(() => {
  //   //   setTimer((prevTimer) => prevTimer - 1);
  //   // }, 1000);
  //   // return () => {
  //   //   clearInterval(id);
  //   // };
  //   if (timer > 0 && shouldRunning) {
  //     setTimeout(() => {
  //       setTimer(timer - 1);
  //     }, 1000);
  //   } else if (timer === 0) {
  //     endGame();
  //   }
  // }, [timer, shouldRunning]);

  // function countWords() {
  //   let wordArr = text.trim().split(" ");
  //   wordArr = wordArr.filter((w) => w !== "");
  //   return wordArr.length;
  // }
  const {
    text,
    timer,
    shouldRunning,
    wordCount,
    textAreaRef,
    startGame,
    endGame,
    handleChange,
  } = useWordGame(10);
  // useWordGame can export/import an array -> which gives developer more flexibility of using any name for the property or object.
  return (
    <div className="App">
      <h1 className="heading">How fast do you type?</h1>
      <textarea
        ref={textAreaRef}
        disabled={!shouldRunning}
        rows="30"
        value={text}
        onChange={handleChange}
      />
      <h4>Time Remaining: {timer}s</h4>
      <button
        disabled={shouldRunning}
        onClick={() => {
          startGame();
        }}
      >
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
