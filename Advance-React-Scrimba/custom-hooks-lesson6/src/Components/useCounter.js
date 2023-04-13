import { useState } from "react";

function useCounter() {
  // This function will initialize state
  // create any functions we need for modifying the state
  // return whatever we want another component to have access to (count, increment)

  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  /* If we export properties as object, then we have to use same
 names as they're exported but if we export them in arrays we can change the
 property's name in the function they're exported.
 */
  return { count, increment };
}

export default useCounter;
