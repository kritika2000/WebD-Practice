import React from "react";

function RenderProps(props) {
  //   return <div>{props.name()}</div>;
  //   Passing parameters backward to the parent component.
  return <div>{props.render("Kritika")}</div>;
}

export default RenderProps;
