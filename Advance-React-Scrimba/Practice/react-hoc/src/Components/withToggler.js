import React, { useState } from "react";

function withToggler(C, defaultValue = false) {
  return function (props) {
    const [state, setState] = useState(defaultValue);
    function toggleState() {
      setState((prev) => !prev);
    }
    return <C {...props} state={state} toggleState={toggleState} />;
  };
}

export default withToggler;
