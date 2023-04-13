import React from "react";
import { useState } from "react";
// https://felixgerschau.com/react-rerender-components/#what-is-rendering

export default function State() {
  // react doesn't watch for local variable changes/
  const state = "yes";
  // rerendering happens when state of a component changes.
  /* useState() returns an array of size 2 where
   first elem -> undefined and second is a function.
   [undefined, ƒ()];
   In simple words, useState takes two arguments -> initial state value and
   a function to change the state which react listens and rerender the component.
   we can change the state with the callback function in useState only.
   */
  //   destructure the array returned by useState.
  const [isImportant, setImportant] = useState("Yes");
  return (
    <div className="state">
      <h1 className="state--title">Is state important to know?</h1>
      <div
        className="state--value"
        onClick={() => {
          let val = isImportant;
          val === "Yes" ? (val = "No") : (val = "Yes");
          setImportant(val);
        }}
      >
        <h1>{isImportant}</h1>
      </div>
    </div>
  );
}
