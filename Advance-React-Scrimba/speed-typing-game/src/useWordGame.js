import { useState, useRef, useEffect } from "react";

function useWordGame() {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(10);
  const [shouldRunning, setShouldRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textAreaRef = useRef(null);

  function handleChange(event) {
    setText(event.target.value);
  }

  function startGame() {
    setTimer(10);
    setText("");
    setWordCount(0);
    setShouldRunning(true);
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
    // console.log(textAreaRef.current);
  }

  function endGame() {
    setWordCount(countWords());
    setShouldRunning(false);
  }

  useEffect(() => {
    // const id = setInterval(() => {
    //   setTimer((prevTimer) => prevTimer - 1);
    // }, 1000);
    // return () => {
    //   clearInterval(id);
    // };
    if (timer > 0 && shouldRunning) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      endGame();
    }
  }, [timer, shouldRunning]);

  function countWords() {
    let wordArr = text.trim().split(" ");
    wordArr = wordArr.filter((w) => w !== "");
    return wordArr.length;
  }
  return {
    text,
    timer,
    shouldRunning,
    wordCount,
    textAreaRef,
    startGame,
    endGame,
    handleChange,
  };
}

export default useWordGame;
