import React from "react";
import PropTypes from "prop-types";
import { ThemeContextConsumer as Consumer } from "./ThemeContextProvider";

function Button(props) {
  return (
    <Consumer>
      {(context) => (
        <button
          className={`${context.theme}-theme`}
          onClick={context.toggleTheme}
        >
          Switch Theme
        </button>
      )}
    </Consumer>
  );
}

export default Button;
