import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./Components/Header";
// import Header from "./Challenge1/Header";
import Button from "./Components/Button";
// import ThemeContext from "./Challenge1/userContext";
import { ThemeContextConsumer } from "./Components/themeContext";

class App extends React.Component {
  // static contextType = ThemeContext;
  render() {
    return (
      <div>
        <Header />
        {/* <main>
          <p className="main">No new notifications, {this.context}! 🎉</p>
        </main> */}
        {/* Using this button with theme context */}
        <ThemeContextConsumer>
          {(context) => (
            <button
              className={`${context.theme}-theme`}
              onClick={context.toggleTheme}
            >
              Switch Theme
            </button>
          )}
        </ThemeContextConsumer>

        <Button theme="light" />
        {/* <Button /> */}
      </div>
    );
  }
}

export default App;
