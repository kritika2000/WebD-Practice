import React, { Fragment } from "react";
import GrandChild from "./GrandChild";

function Child() {
  // Multiple components/elements need to be wrapped inside a container - div or fragment.
  // Fragment doesn't create a new element whicle wrapping multiple elements.
  // Do not use fragments when it's necessary to maintain parent child relationships.
  return (
    // or use <></>.
    <Fragment>
      <h1>I'm the Child component</h1>
      <GrandChild />
    </Fragment>
  );
}

export default Child;
