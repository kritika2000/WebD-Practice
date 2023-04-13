// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities

// Why use HOCs

/* 
Problem => duplicated logic of toggling for eg in multiple components.
*/

import React, { Component } from "react";

class Toggler extends Component {
  state = {
    // on: false,
    // Instead of initilizing state with a 'false' value always we can initialize
    // it with a default value passed from the component.
    on: this.props.defaultOnValue,
  };
  toggle = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on,
      };
    });
  };
  render() {
    const Component = this.props.component;
    return (
      <Component on={this.state.on} toggle={this.toggle} {...this.props} />
    );
  }
}
// an HOC can take an options to get the default value of state for different components..
function withToggler(component, optionsObj) {
  return function (props) {
    // taking props from the component passed.
    // passing the passed component as props in a new component.
    return (
      <Toggler
        component={component}
        defaultOnValue={optionsObj.defaultOnValue}
        {...props}
      />
    );
  };
}

export default withToggler;
