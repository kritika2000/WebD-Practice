import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import GrandParent from "./GrandParent";

class App extends Component {
  state = { count: 0 };

  increment = () =>
    this.setState((prevState) => ({ count: prevState.count + 1 }));

  render() {
    console.log("[GP] [P] [C] [GC] APP just rendered");
    return (
      <div>
        <button onClick={this.increment}>+1</button>
        <h2>{this.state.count}</h2>
        <p>I'm the App component</p>
        {/* GrandParent is getting rerendered when state is updated even though
        we haven't passed the state as props. */}
        {/* If changeable props and state are passed it will rerender.*/}
        {/* If we make the outermost child component(s) with no state/props passed pure it will only rerender GrandParent(with state) */}
        <GrandParent count={this.state.count} />
        <GrandParent />
      </div>
    );
  }
}

export default App;
