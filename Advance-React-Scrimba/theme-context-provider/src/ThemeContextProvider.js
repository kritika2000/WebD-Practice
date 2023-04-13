import React, { Component } from "react";
const ThemeContext = React.createContext();
const { Provider, Consumer } = ThemeContext;

class ThemeContextProvider extends Component {
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
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
