import React from "react";

class CardClass extends React.Component {
  static defaultProps = {
    cardColor: "blue",
    height: 100,
    width: 100,
  };

  render() {
    console.log(this.props);
    const styles = {
      backgroundColor: this.props.cardColor,
      height: this.props.height,
      width: this.props.width,
    };

    return <div style={styles}></div>;
  }
}

/* the browser will take default props if the user hasn't passed any props,
and will override it if they're passed.
*/

// Can make default props a static property in class component.
// CardClass.defaultProps = {
//   cardColor: "pink",
//   height: 100,
//   width: 100,
// };

export default CardClass;
