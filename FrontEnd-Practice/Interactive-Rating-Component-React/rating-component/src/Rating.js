import React from "react";

function Rating(props) {
  console.log(props.styles);
  return (
    <div
      onClick={props.toggleColor}
      style={{
        backgroundColor: props.styles,
      }}
    >
      {props.data.value}
    </div>
  );
}

export default Rating;
