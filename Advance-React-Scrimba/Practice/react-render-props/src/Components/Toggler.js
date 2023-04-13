import React, { useState } from "react";

function Toggler(props) {
  const [state, setState] = useState(props.defaultValue);
  function toggleState() {
    setState((prev) => !prev);
  }
  return <div>{props.render({ state, toggleState })}</div>;
}
Toggler.defaultProps = {
  state: false,
};

export default Toggler;
