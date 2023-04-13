import React, { useState } from "react";
import withToggler from "./withToggler";

function Favorite(props) {
  //   const [state, setState] = useState(false);
  //   function toggleFavorite() {
  //     setState((prev) => !prev);
  //   }
  const { state, toggleState } = props;
  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={toggleState}>{state ? "❤️" : "♡"}</span>
      </h1>
    </div>
  );
}

export default withToggler(Favorite);
