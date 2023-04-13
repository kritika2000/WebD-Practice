import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Children from "./Components/Children";
import CTA from "./Components/CTA";
import EmailCallout from "./Components/Challenge-Children/EmailCallout";
import InfoCallout from "./Components/Challenge-Children/InfoCallout";
import ImageCallout from "./Components/Challenge-Children/ImageCallout";
import Callout from "./Components/Challenge-Children/Callout";
import ParentCTA from "./Components/ParentCTA";
import withHOC from "./Components/HOCs/withHOC";
import withExtraPropAdded from "./Components/HOCs/withExtraPropAdded";
import { withFavoriteNumber } from "./Components/HOCs/Challenge-HOC/withFavouriteNumber";
import Menu from "./Components/HOCs/HOC-Part3/Menu";
import Favorite from "./Components/HOCs/HOC-Part3/Favorite";
import withToggler from "./Components/HOCs/HOC-Part3/withToggler";

// Always prefer composition over inheritance( inheriting traits from parents ) in react.

/*
1. Components are the base units for code reuse in react (with props as well).
 -> same as functions passed with 0 or more arguments.
2. Children
3. HOCs
4. Render Props.
*/

function App(props) {
  console.log(props);
  return (
    <div className="App">
      {/* <Children /> */}
      {/* Self-closing component */}
      {/* <CTA /> */}
      {/* Anything we put between these opening and closing tags will be
        automatically accessible inside the component using props.children.
      */}
      {/* <CTA>
        <h1>This is an important CTA</h1>
        <button>Click me now or you'll missout!</button>
      </CTA>
      <CTA>
        <form>
          <input type="email" placeholder="Enter email address here" />
          <br />
          <button>Submit</button>
        </form>
      </CTA> */}
      {/* <ParentCTA /> */}
      <Menu />
      <Favorite />
      {/* {props.favNum} */}
    </div>
  );
}

// export default withHOC(App);
export default withExtraPropAdded(App);
// We can still pass props from the actual component as well.
// export default withFavoriteNumber(App);

// export default App;
