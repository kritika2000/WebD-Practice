import React, { Component } from "react";
import Toggler from "./Toggler";
import useToggler from "./useToggler";

function Favorite(props) {
  const [on, toggle] = useToggler(false);
  return (
    // <Toggler
    //   render={({ on, toggle }) => (
    //     <div>
    //       <h3>Click heart to favorite</h3>
    //       <h1>
    //         <span onClick={toggle}>{on ? "❤️" : "♡"}</span>
    //       </h1>
    //     </div>
    //   )}
    // />
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={toggle}>{on ? "❤️" : "♡"}</span>
      </h1>
    </div>
  );
}

export default Favorite;
