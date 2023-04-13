import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Todo from "./Components/Todo";

function App() {
  const [state, setState] = useState({
    mode: "dark",
    modeIcon: "sun",
    todo: "",
    todoList: [],
  });
  function toggleMode() {
    setState((prev) => ({
      ...prev,
      mode: state.mode == "dark" ? "light" : "dark",
      modeIcon: state.modeIcon == "sun" ? "moon" : "sun",
    }));
  }
  function addTodo() {
    setState((prev) => ({
      ...prev,
      todo: "",
      todoList: [...state.todoList, state.todo],
    }));
  }
  function onTodoChange(e) {
    setState((prev) => ({
      ...prev,
      todo: e.target.value,
    }));
  }
  return (
    <div className={`todo--app ${state.mode}`}>
      <img src={`/images/bg-desktop-${state.mode}.jpg`} />
      <div className="todo--layout--container">
        <div className="mode--container">
          <h2>TODO</h2>
          <img src={`/icons/icon-${state.modeIcon}.svg`} onClick={toggleMode} />
        </div>
        <div className="todo--input">
          <input
            type={"text"}
            name="todo"
            value={state.todo}
            onChange={onTodoChange}
          ></input>
          <button
            className={`button ${state.mode}`}
            onClick={addTodo}
            disabled={!state.todo.length}
          >
            Add Todo
          </button>
        </div>
        <div className="todo--list--container">
          {state.todoList.map((todo) => {
            return <Todo mode={state.mode} todo={todo} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
