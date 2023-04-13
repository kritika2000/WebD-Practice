import React, { Component } from "react";
import { ThemeContextConsumer } from "./themeContext";

// class Button extends Component {
//   render() {
//     /* By setting up the static contextType property to this class,
//      we have a context property */
//     //  this.context is same as whatever value is passed by the Provider using value props.
//     console.log(this.context);
//     return <button className={`${this.context}-theme`}>Switch Theme</button>;
//   }
// }

// Button.contextType = ThemeContext;

/**
 * There are few ways to consume Context:-
 * 1. Adding a static property - contextType to the
 * class(it is limited to class components and there isn't a way to passdown a
 * method to change the data). Works fine if we only want to consume data.
 *
 */

function Button(props) {
  return (
    // <ThemeContext.Consumer>
    // {(theme) =>
    <button className={`${props.theme}-theme`}>Switch Theme</button>
    // )}
    // </ThemeContext.Consumer>
  );
}

export default Button;
