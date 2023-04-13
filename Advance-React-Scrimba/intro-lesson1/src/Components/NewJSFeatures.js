import React, { Component } from "react";

class NewJSFeatures extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       count: 0,
  //     };
  //   }
  //Creating state using class fields.
  state = {
    count: 0,
  };
  //   With arrow function we don't need to explicitly bind it with this class.
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  render() {
    // object destructuring.
    const { count } = this.state;
    // We can change the name of the property while destructuring
    const { count: number } = this.state;
    return (
      <div>
        {/* <h1>{count}</h1> */}
        <h1>{number}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default NewJSFeatures;
