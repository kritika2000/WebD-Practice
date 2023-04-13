import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import MyClass from "./Components/Class";
import State from "./Components/State";
import Counter from "./Components/Counter";

// function App() {
//   return <h1>App</h1>;
// }

// export default App;

/*
In function components, we accept props object as parameters, however in class
components we no longer have to accept props anywhere, it is automatically added with
the object created with the class.
 */
export default class App extends Component {
  render() {
    return (
      <>
        <h1>{this.props.type} components</h1>
        <MyClass />
        <State />
        <Counter />
      </>
    );
  }
}
