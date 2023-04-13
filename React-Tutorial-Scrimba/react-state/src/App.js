import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  let stateVar = state;
  console.log(stateVar);
  return (
    <div className="App">
      <button onClick={() => setState((prev) => prev + 1)}>Click</button>
    </div>
  );
}

export default App;
