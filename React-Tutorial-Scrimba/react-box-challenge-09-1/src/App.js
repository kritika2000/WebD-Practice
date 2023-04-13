import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "./Components/Box";
import boxesArray from "./Components/boxes";

function App() {
  const [boxesData, setBoxes] = useState(boxesArray);
  // We can pass id of the box triggered click.
  function toggleColor(id) {
    // const boxIndex = boxesData.findIndex((b) => b.id === id);
    // setBoxes([
    //   ...boxesData.slice(0, boxIndex),
    //   {
    //     id: id,
    //     on: !boxesData[boxIndex].on,
    //   },
    //   ...boxesData.slice(boxIndex + 1),
    // ]);
    // Using map
    setBoxes((prevBoxes) => {
      return prevBoxes.map((box) => {
        return box.id === id ? { ...box, on: !box.on } : box;
      });
    });
  }

  const boxes = boxesData.map((box) => {
    return (
      // we can pass functions with parameters from parent as well
      // <Box on={box.on} key={box.id} id={box.id} toggleColor={toggleColor} />
      <Box
        on={box.on}
        key={box.id}
        toggleColor={() => {
          toggleColor(box.id);
        }}
      />
    );
  });
  return (
    <div className="App">
      <main className="box--container">{boxes}</main>;
    </div>
  );
}

export default App;
