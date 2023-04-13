import logo from "./logo.svg";
import "./App.css";
import Hooks from "./Components/HooksUseState";
import UseStateHookCounter from "./Components/UseStateHookCounter";
import Form from "./Components/Form";
import UseEffectHook from "./Components/UseEffectHook";
import TodoList from "./Components/TodoList";
import { useState } from "react";

function App() {
  const [isMount, setIsMount] = useState(true);
  return (
    <div className="App">
      {/* <Hooks /> */}
      {/* <UseStateHookCounter /> */}
      {/* <Form /> */}
      <button onClick={() => setIsMount((prev) => !prev)}>
        Mount or Unmount
      </button>
      {/* {isMount && <UseEffectHook />} */}
      <UseEffectHook />
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
