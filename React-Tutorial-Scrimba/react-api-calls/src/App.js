import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = React.useState(1);
  // console.log("Component Rerendered!");
  //  The callback function inside useEffect will run on every render.
  /* 
  Dependencies array -> second parameter of useEffect()
  Contains state values which when change cause this useEffect to run.
  It limits the no. of times Effect will run.
  [] means makes the Effect run only on first render.
  */
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
    console.log("Effect ran");
  }, [count]);

  /* This component will be rerendered infinite times, 
  as this call will be executed everytime a component rerenders,
  which initiated the rerendering in the first place.
  */
  // fetch("https://swapi.dev/api/people/1")
  //   .then((res) => res.json())
  //   .then((data) => setStarWarsData(data));

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get Next Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
/**

---------------------- What are React's Primary Tasks? ------------------
1. Work with the DOM/browser to render UI to the page.
2. Manage state for us between render cycles(i.e. state values are remembered
from one render to the next).
Keep the UI updated whenever state changes.

-------------------- What React can't handle on it's own--------------------
Side Effects -> that lives outside the scope of React.
Eg:- Local Storage, API/database interactions.
We use useEffect() hook to handle side Effects.
*/

/**
 ******************************* Quiz ***************************
 
 1. What is a "side effect" in React? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync


2. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, 
  render DOM elements


3. When does React run your useEffect function? When does it NOT run
   the effect function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders


4. How would you explain what the "dependecies array" is?
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function

 */
