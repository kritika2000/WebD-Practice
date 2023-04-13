import React from "react";

function Callout(props) {
  return (
    <div className="callout">
      <h1>Callout</h1>
      {props.children}
    </div>
  );
}

export default Callout;
