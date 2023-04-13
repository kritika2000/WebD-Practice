/**
 * Custom hook is a way of reusing the hook logic. For eg:-
 * We might want to create a state for count in multiple components.
 * We can do it either by copy pasting the useState hook logic or we can create
 * a custom hook in a separate file.
 */

import React, { useState } from "react";
import useCounter from "./useCounter";

function CustomHook() {
  //   const [count, setCount] = useState(0);
  //   function increment() {
  //     setCount((prevCount) => prevCount + 1);
  //   }
  const { count, increment } = useCounter();
  return (
    <div>
      <h1>The Count is {count}</h1>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}

export default CustomHook;
