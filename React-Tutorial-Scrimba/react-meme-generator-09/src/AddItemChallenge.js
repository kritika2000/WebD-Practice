import React, { useState } from "react";

/* 
For now this won't update the page when the button is clicked
as the thingsElement is eveluated before the button is clicked
and is run only one time when the component is rendered.
*/
/* We can't just use append() method to append DOM 
elements as JSX return an object which is converted into real DOM
element by React. The append() method will only push the object not the DOM element.
*/

export default function AddItemChallenge() {
  const [thingsArray, addThings] = useState([]);
  // const thingsArray = ["Thing 1", "Thing 2"];

  function addItem() {
    addThings((prevArray) => [
      ...prevArray,
      `Things  ${thingsArray.length + 1}`,
    ]);
    // thingsElements.push("Things " + thingsArray.length + 1);
  }
  let thingsElements = thingsArray.map((thing) => <li>{thing}</li>);

  /*
   * Challenge: Map over the thingsArray to generate
   * a <p> element for each item and render them on the page
   * below the button
   */

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {/* Insert the things here*/}
      <ul>
        {/* {thingsArray.map((thing) => (
          <li>{thing}</li>
        ))} */}
        {thingsElements}
      </ul>
    </div>
  );
}
