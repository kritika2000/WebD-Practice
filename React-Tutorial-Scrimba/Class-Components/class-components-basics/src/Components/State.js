import React, { Component } from "react";

export default class App extends Component {
  //In class components, state will always be an obj unlike function components.
  // const [goOut, setGoOut] = useState("Yes")

  //using a class field.
  state = {
    goOut: "Yes",
  };

  // Do not add 'function' keywords for functions in classes.
  toggleGoOut = () => {
    console.log(this);
    this.setState((prevState) => {
      return {
        goOut: prevState.goOut === "Yes" ? "No" : "Yes",
      };
    });
  };
  render() {
    return (
      <div className="state">
        <h1 className="state--title">Should I go out tonight?</h1>
        <div className="state--value" onClick={this.toggleGoOut}>
          <h1>{this.state.goOut}</h1>
        </div>
      </div>
    );
  }
}
