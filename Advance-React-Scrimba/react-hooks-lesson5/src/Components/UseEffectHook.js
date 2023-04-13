import React, { useState, useEffect } from "react";

// Used to handle side effects -> something that is beyond the control of react.
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals
// Their main job is not managing state or display content on the screen.

function UseEffectHook() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  // By default, it is executed on every render.
  // This function accepts two parameters -> 1. callback , 2. dependency array.
  /**
   * Dependency array contains the variables which causes rerender when they change.
   * Empty array -> to render for the first time only.
   */
  // useEffect(() => {
  //   // this will cause the count to update with multiple intervals.
  //   /**
  //    * on every update in count, useEffect will create a new interval
  //    * which updates count while the previous intervals are also
  //    * updating the count.
  //    * One solution to create the interval once by putting an empty dependency array.
  //    */
  //   setInterval(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, 1000);
  // }, [count]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    console.log("Component Mounted", intervalId);
    return () => {
      clearInterval(intervalId);
      console.log("Component Unmounted", intervalId);
    };
  }, [count]);

  return (
    <div>
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}
      <h1>{count}</h1>
    </div>
  );
}

export default UseEffectHook;
