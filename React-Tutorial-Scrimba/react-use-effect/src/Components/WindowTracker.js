import { React, useEffect, useState } from "react";

/**
 *
 * App component is deciding when the window tracker component
 * should be rendered.
 * When the WT component is rendered(mounted) it is setting up the initil value
 * of the window width and the useEffect is registering the eventListener everytime
 * the WT component is mounted.
 * When the WT Component is removed from the DOM(unmounted) cleanup functiion would run.
 * Good practice to cleanup after side effects.
 */

export default function WindowTracker() {
  // when show is false this component is completely removed from the DOM(unmounting)
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function watchWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);
    // cleanup function -> as the event listeners are registered with the DOM so even the component is unmounted the event listener will still be active.
    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);
  return <h1>Window width: {width}</h1>;
}
