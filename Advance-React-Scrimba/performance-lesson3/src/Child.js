import React, { Component } from "react";
import GrandChild from "./GrandChild";

// class Child extends Component {
//   render() {
//     console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered");
//     return (
//       <div>
//         <p>I'm a Child Component</p>
//         <GrandChild />
//         <GrandChild />
//       </div>
//     );
//   }
// }

function Child() {
  console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered");
  return (
    <div>
      <p>I'm a Child Component</p>
      <GrandChild />
      <GrandChild />
    </div>
  );
}

export default Child;
