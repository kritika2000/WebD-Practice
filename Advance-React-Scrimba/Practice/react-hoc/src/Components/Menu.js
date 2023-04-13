import React, { useState } from "react";
import withToggler from "./withToggler";

function Menu(props) {
  //   const [state, setState] = useState(true);

  //   function toggleShow() {
  //     setState((prev) => !prev);
  //   }
  const { state, toggleState } = props;
  return (
    <div>
      <div>
        <button onClick={toggleState}>{state ? "Hide" : "Show"} Menu </button>
        <nav style={{ display: state ? "block" : "none" }}>
          <h6>Signed in as Coder123</h6>
          <a>Your Profile</a>
          <a>Your Repositories</a>
          <a>Your Stars</a>
          <a>Your Gists</a>
        </nav>
      </div>
    </div>
  );
}

export default withToggler(Menu, true);
