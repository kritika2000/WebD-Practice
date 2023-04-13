import React, { Component } from "react";
import { ThemeContextConsumer as Consumer } from "./ThemeContextProvider";

function Header(props) {
  return (
    <Consumer>
      {(context) => (
        <header className={`${context.theme}-theme`}>
          <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
      )}
    </Consumer>
  );
}

export default Header;
