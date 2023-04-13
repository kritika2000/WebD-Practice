import React from "react";

/**
 * A function that takes a component as its first argument
 * and returns a new component that wraps the given component,
 * providing extra capabilities to it.
 */
function withHOC(component) {
  const Component = component;
  return function (props) {
    // props(passed when calling the component) need to be returned with the component we're returning.
    return <Component {...props} />;
  };
}

export default withHOC;
