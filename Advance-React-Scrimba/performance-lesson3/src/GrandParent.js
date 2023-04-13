import React, { Component, PureComponent } from "react";
import Parent from "./Parent";

// class GrandParent extends PureComponent {
//   //   shouldComponentUpdate(nextProps, nextState) {
//   // Shallow compare the props and state using PureComponent/Memo.
//   // We can't compare the objects direcly as they're going to return false always.
//   // It will be tedious to do shallow comparisons
//   // manually for objects with large no. of properties.
//   //   }
//   render() {
//     console.log("[👴🏼]   [ ]   [ ]   [ ] rendered");
//     return (
//       <div>
//         <p>I'm a GrandParent Component</p>
//         <Parent />
//         <Parent />
//       </div>
//     );
//   }
// }

function GrandParent(props) {
  console.log("[👴🏼]   [ ]   [ ]   [ ] rendered");
  return (
    <div>
      <p>I'm a GrandParent Component</p>
      <Parent />
      <Parent />
    </div>
  );
}
// internally implemented by React.memo()
function areEqual(prevProps, nextProps) {
  /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
}
/* the new function component that React.memo() 
returns will automatically check for changes in props.
Not rerendering children components as well.
*/
// Using my own areEqual function.
export default React.memo(GrandParent, areEqual);
