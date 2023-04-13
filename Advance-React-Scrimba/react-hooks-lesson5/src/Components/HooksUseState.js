import React, { useState } from "react";

// class Hooks extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       answer: "Yes",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Is state important to know? {this.state.answer}</h1>
//       </div>
//     );
//   }
// }

function Hooks() {
  /* useState hooks returns an array of size 2 where
   first element is the initial value of the state
   and the second element is function to change the state when required.
   */
  // const value = useState("Yes");
  // using array destructuring
  const [answer] = useState("Yes");
  console.log(answer);
  return (
    <div>
      {" "}
      <h1>Is state important to know? {answer}</h1>{" "}
    </div>
  );
}

export default Hooks;
