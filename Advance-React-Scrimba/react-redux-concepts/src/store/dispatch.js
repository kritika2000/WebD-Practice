const redux = require("redux");

function increment() {
  return {
    type: "INCREMENT",
  };
}

function decrement() {
  return {
    type: "DECREMENT",
  };
}

function reducer(state = { count: 0 }, action) {
  // return new state based on the incoming action.type
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}
// store takes reducer function an parameter.
// With this statement, redux creates a store.
const store = redux.createStore(reducer);
// console.log(store);
/**
 * {
  dispatch: [Function: dispatch],
  subscribe: [Function: subscribe],
  getState: [Function: getState],
  replaceReducer: [Function: replaceReducer],
  '@@observable': [Function: observable]
}
 */
/**
 * It allows us to pass a function to it where we can perform any kind of operation
 * after a change is made to the store/state.
 */
store.subscribe(() => {
  // getState returns the current state of the redux store.
  console.log(store.getState());
});

/* 
To see redux working we need to use dispatcher, it send the action to 
the reducer.
IT ACCEPTS AN ACTIONS AS ARGUMENT.
*/

store.dispatch({ type: "INCREMENT" });
store.dispatch(increment());
store.dispatch(decrement());
// returns the state from default case.
store.dispatch({ type: "SOMETHING" });
