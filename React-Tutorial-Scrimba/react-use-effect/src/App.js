import "./App.css";
import { useState } from "react";
import WindowTracker from "./Components/WindowTracker";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <button onClick={() => setShow((prev) => !prev)}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
