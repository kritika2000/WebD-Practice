import React from "react";
const ThemeContext = React.createContext();
const { Provider, Consumer } = ThemeContext;

/**
 * To be able to switch themes on button click we need to pass some state
 * in value prop while wrapping the <App/> component in a Provider
 * but index.js is itself not a component where we can define a state,
 * so we need to create a new component where we'll do the Provider
 * wrapping of <App/> and pass state as value prop.
 */

class ThemeContextProvider extends React.Component {
  state = {
    theme: "light",
  };

  toggleTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === "light" ? "dark" : "light",
      };
    });
  };

  render() {
    return (
      <Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
