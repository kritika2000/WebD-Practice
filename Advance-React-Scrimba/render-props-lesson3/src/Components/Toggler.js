import React, { Component } from "react";

class Toggler extends Component {
  state = {
    on: this.props.defaultOn,
  };
  static defaultProps = {
    defaultOn: true,
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on,
      };
    });
  };

  render() {
    // return <div>{this.props.render(this.state.on, this.toggle)}</div>;
    // Passing argument as objects to handle large no. of arguments.
    console.log(this.props);
    return (
      <div>
        {this.props.render({
          on: this.state.on,
          toggle: this.toggle,
        })}
      </div>
    );
  }
}

export default Toggler;
