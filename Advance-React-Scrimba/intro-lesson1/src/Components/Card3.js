import React from "react";
import PropTypes from "prop-types";

/*
https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
We can do typechecking of the incoming props.
Browser will log a warning, if incoming props are not of a specific type
as mentioned by propTypes property.
*/

function Card(props) {
  console.log(props);
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width,
  };

  return <div style={styles}></div>;
}

/* the browser will take default props if the user hasn't passed any props,
and will override it if they're passed.
*/
// Challenge: Add prop types for the height and width. Make at least one of them required.
// Extra Challenge: Make it so your incoming cardColor is only valid if it is "blue" or "red".
Card.propTypes = {
  /* cardColor prop is marked as required i.e. the user 
    needs to pass a cardColor otherwise it shows a warning.*/
  //   cardColor: PropTypes.string.isRequired,
  cardColor: PropTypes.oneOf(["blue", "red"]),
  height: PropTypes.number.isRequired,
  width: PropTypes.number,
};

Card.defaultProps = {
  //   cardColor: "pink",
  //   height: 100,
  width: 200,
};

export default Card;

/**
 * PropTypes are a development tool i.e. the warnings will be shown
 * when the node environment is set to development.
 */
