import React from "react";
import Toggler from "./Toggler";
function Favorite() {
  return (
    <Toggler
      render={function ({ state, toggleState }) {
        return (
          <div>
            <h3>Click heart to favorite</h3>
            <h1>
              <span onClick={toggleState}>{state ? "❤️" : "♡"}</span>
            </h1>
          </div>
        );
      }}
    />
  );
}

export default Favorite;
