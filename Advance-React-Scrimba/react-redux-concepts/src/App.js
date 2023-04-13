import logo from "./logo.svg";
import "./App.css";
import { connect, useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store-react/count";

/**
 * react-redux comes with a function called connect().
 * It basically connect the redux-store and the component.
 * It is an HOF(takes a component as argument) and returns a changed version of the component passed.
 * connect() accepts two arguments:-
 * 1. What part of the global state does this component has access to?
 * 2. The actions we need to dispath from this component.
 *
 * It then returns a function to which you pass the  conponents you
 * want to connect to. When called, this function creates a new component
 * wrapping yours, which passes the global state and dispatchable actions
 * to your component.
 *
 * connect(App) will create a wrapper around our component and the wraper
 * will connect to both the global state and dispatch from redux. Then it passes
 * what App component as props.
 * connect("What part of state do you want?", "What actions do you wnt to dispatch?")(Component).
 *
 * We usually, pass mapStateToPropsFunc and mapDispatchToPropsFunc to connect.
 */

function App(props) {
  // const { count, increment, decrement } = props;
  // First param is a function that returns what portion of state we want.
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {" "}
      <div>
        <h1>COUNT GOES HERE: {`${count}`}</h1>
        {/* <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>  */}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

function mapStateToProps(globalState) {
  // return an object where the keys are the name of the prop your component wants,
  // values are the actual parts of the global state your component wants
  // It's job is to pass the props to the component.
  //console.log(globalState); -> 0
  return {
    // banana: "hello" -> now the App component has access to props.banana
    count: globalState,
  };
}

function mapDispatchToProps() {
  // functions.actions to dispatch
  // it also returns an object where the keys would be the actions disopatched to the reducer
  //and are received by App component via props.
  return {
    increment,
    decrement,
  };
}

// useSelector hook is a replacement for the first argument of connect();
// useDispatch hook is a replacement for the second argument of connect.

// export default connect(/* What parts of state do you want? */, /* What actions to dispatch? */)(App)
// export default connect(mapStateToProps, mapDispatchToProps())(App);
export default App;
