import React, { Component } from "react";
import ThemeContext from "./userContext";

class Header extends Component {
  static contextType = ThemeContext;
  render() {
    const theme = this.context;
    console.log(this);
    return (
      <header>
        <p>Welcome, {theme}!</p>
      </header>
    );
  }
}

export default Header;
