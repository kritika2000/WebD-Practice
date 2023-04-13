import React, { Component } from "react";
import { ThemeContext } from "./themeContext";

// class Header extends Component {
//   static contextType = ThemeContext;
//   render() {
//     return (
//       <header className={`${this.context}-theme`}>
//         <h2>{`${this.context === "light" ? "Light" : "Dark"} Theme`}</h2>
//       </header>
//     );
//   }
// }

const { Consumer } = ThemeContext;

function Header(props) {
  return (
    <Consumer>
      {({ theme }) => (
        <header className={`${theme}-theme`}>
          <h2>{`${theme === "light" ? "Light" : "Dark"} Theme`}</h2>
        </header>
      )}
    </Consumer>
  );
}

export default Header;
