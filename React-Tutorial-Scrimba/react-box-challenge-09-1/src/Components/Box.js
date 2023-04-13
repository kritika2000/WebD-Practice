import React, { useState } from "react";
import "./Box.css";
import boxesArray from "./boxes";

/*
Though we can't update the props but we can set the initial 
state to the props and change the state instead.
*/

function Box(props) {
  /* 
  local state to each box known as derived state(derived from parent)
  We probably don't need a derived state, it can give unexpected results as it 
  is only updating the state locally not in the parent.
  Instead of creating states locally for each components, we can use the state already
  create in the parent component.
  */
  //   const [isOn, setOn] = useState(props.on);
  const styles = {
    backgroundColor: props.on ? "aqua" : "#FFF",
  };
  return (
    <div
      //   onClick={() => setOn((prevOn) => !prevOn)}
      /*   
      With local states it was easy to know which box was clicked.
      Now, I need to figure out which box has triggered toggleColor inside parent component.s
      */
      //  to pass the id we need to create out own function which runs the props.toggle
      //   no need to pass id now as we have the function with parameter.
      // onClick={() => {
      //   props.toggleColor(props.id);
      // }}
      onClick={props.toggleColor}
      key={props.id}
      style={styles}
      className="box"
    ></div>
  );
}

export default Box;
