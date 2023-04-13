import logo from "./logo.svg";
import "./App.css";
import { React, useState } from "react";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }
  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main />
    </>
  );
}

export default App;
