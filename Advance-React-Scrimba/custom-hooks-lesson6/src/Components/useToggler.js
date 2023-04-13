import { useState } from "react";

function useToggler(defaultValue) {
  const [on, setOn] = useState(defaultValue);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return [on, toggle];
}

export default useToggler;
