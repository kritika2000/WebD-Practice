import React, { useState } from "react";
import Toggler from "./Toggler";

function Menu() {
  return (
    <Toggler
      defaultValue={true}
      render={function ({ state, toggleState }) {
        return (
          <div>
            <button onClick={toggleState}>
              {state ? "Hide" : "Show"} Menu{" "}
            </button>
            <nav style={{ display: state ? "block" : "none" }}>
              <h6>Signed in as Coder123</h6>
              <a>Your Profile</a>
              <a>Your Repositories</a>
              <a>Your Stars</a>
              <a>Your Gists</a>
            </nav>
          </div>
        );
      }}
    />
  );
}

export default Menu;
