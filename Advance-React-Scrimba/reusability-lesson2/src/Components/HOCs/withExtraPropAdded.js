import React from "react";

function withExtraPropAdded(component) {
  const Component = component;
  return function (props) {
    // props will be added to the component passed.
    return <Component anotherProp="extra added prop..." {...props} />;
  };
}

export default withExtraPropAdded;
