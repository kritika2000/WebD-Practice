const redux = require("redux");
const initialState = {
  count: 0, //initial state.
};
// reducer takes initial state and action and update the new state based on the action type.
function reducer(state = initialState, action) {
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

// Creating a store and passing reducer
const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});
// Dispatching some actions to determine what should happen to a state.
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
