import React, { useState } from "react";

function UseStateHookCounter() {
  const [count, setCount] = useState(0);
  function Decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          /* setCount function can accept the new walue of count or
            a function(callback) receiving previous state value and returning new state/count
            value based upon previous value.
            */
          setCount((prevCount) => {
            return prevCount + 1;
          });
        }}
      >
        Change!
      </button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default UseStateHookCounter;
