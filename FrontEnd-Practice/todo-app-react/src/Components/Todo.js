import React, { useState } from "react";

function Todo(props) {
  const { todo, mode } = props;
  const [state, setState] = useState(false);
  function handleClick(e) {
    setState((prev) => !prev);
  }
  return (
    <>
      <div className={`todo--container ${mode}`}>
        {state ? (
          <div className="icon--check--container check" onClick={handleClick}>
            <img src="/icons/icon-check.svg" />
          </div>
        ) : (
          <div className="icon--check--container" onClick={handleClick}></div>
        )}
        {state ? (
          <p className={`todo--text ${mode} strikethrough`}>{todo}</p>
        ) : (
          <p className={`todo--text ${mode}`}>{todo}</p>
        )}
      </div>
    </>
  );
}

export default Todo;
