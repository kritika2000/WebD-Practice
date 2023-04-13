import logo from "./logo.svg";
import "./App.css";
import RenderProps from "./Components/RenderProps";
import Menu from "./Components/Menu";
import Favourite from "./Components/Favourite";
import Toggler from "./Components/Toggler";
import ChildApp from "./Challenge/ChildApp";

/*

A functional component is itself a JS function whose main job
of a funcional component is to return JSX.
We can also pass a function which returns JSX as props.

“render prop” refers to a technique for sharing code 
between React components using a prop whose value is a function.

*/

function App() {
  return (
    <div className="App">
      {/* <RenderProps name={"Kritika"} /> */}

      {/* passing array as props */}
      {/* <RenderProps name={["Kritika", "Arya"]} /> */}

      {/* Passing function as props */}
      {/* <RenderProps
        // Render Props.
        render={function (name) {
          // return "This is a function";
          return <h1>Hey there, {name}</h1>;
        }}
      /> */}
      {/* Instead of using toggler in individual component, we can 
      use it in App.js as well and pass the state/toggle as props. */}
      {/* <Toggler
        defaultOn={true}
        render={({ on, toggle }) => {
          return <Menu on={on} toggle={toggle} />;
        }}
      /> */}
      {/* <Menu /> */}
      {/* <hr />
      <Favourite /> */}
      <ChildApp />
    </div>
  );
}

export default App;
