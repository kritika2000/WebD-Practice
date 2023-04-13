import React, { Component } from "react";
import { ThemeContext } from "./themeContext";

// class Button extends Component {
//   static contextType = ThemeContext;
//   render() {
//     return <button className={`${this.context}-theme`}>Switch Theme</button>;
//   }
// }

const { Consumer } = ThemeContext;

function Button(props) {
  return (
    // <Consumer>
    //   {(theme) => <button className={`${theme}-theme`}>Switch Theme</button>}
    // </Consumer>
    <button className={`${props.theme}-theme`} onClick={props.handleOnClick}>
      Switch Theme
    </button>
  );
}

export default Button;
