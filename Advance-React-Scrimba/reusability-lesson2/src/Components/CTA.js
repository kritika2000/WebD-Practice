import React from "react";
import "./CTA.css";

function CTA(props) {
  return (
    <div className="border">
      {/* <h1>This is an important CTA</h1>
      <button>Click me now or you'll missout!</button> */}
      {props.children}
    </div>
  );
}

export default CTA;
