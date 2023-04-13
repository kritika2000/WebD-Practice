import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [state, setState] = useState({
    text: "",
    wordCount: 0,
    timeRemaining: 10,
    timerEnabled: false,
  });
  const textareaRef = useRef(null);

  function handleTextChange(e) {
    setState((prev) => ({
      ...prev,
      text: e.target.value,
    }));
  }

  function startTimer() {
    setState((prev) => ({
      ...prev,
      text: "",
      timeRemaining: 10,
      timerEnabled: true,
    }));
    console.log(textareaRef);
    textareaRef.current.focus();
  }

  function endTimer() {
    setState((prev) => ({
      ...prev,
      timerEnabled: false,
    }));
  }

  function countWords(str) {
    let wordCount = str.trim().split(" ").length;
    if (str.length == 0) wordCount = 0;
    setState((prev) => ({
      ...prev,
      wordCount: wordCount,
    }));
  }

  useEffect(() => {
    if (state.timerEnabled && state.timeRemaining > 0) {
      textareaRef.current.focus();
      const id = setInterval(() => {
        setState((prev) => ({
          ...prev,
          timeRemaining: state.timeRemaining - 1,
        }));
      }, 1000);
      return () => {
        clearInterval(id);
      };
    } else if (state.timeRemaining === 0) {
      countWords(state.text);
      endTimer();
    }
  }, [state.timeRemaining, state.timerEnabled]);

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <textarea
        ref={textareaRef}
        disabled={!state.timerEnabled}
        name="text"
        value={state.text}
        onChange={handleTextChange}
      ></textarea>
      <h4>Time Remaining: {`${state.timeRemaining}`}</h4>
      <button disabled={state.timerEnabled} onClick={startTimer}>
        Start
      </button>
      <h1>Word Count: {`${state.wordCount}`}</h1>
    </div>
  );
}

export default App;
