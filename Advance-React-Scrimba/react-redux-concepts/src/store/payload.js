const redux = require("redux");

// payload is added to make the actions dynamic.
/**
 *
 * @returns For our usecase we can attach a payload -> how much we want
 * to increase the number.
 * Action now this carry this amount to the reducer.
 */

function increment(amount) {
  return {
    type: "INCREMENT",
    payload: amount,
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
        count: state.count + action.payload,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = redux.createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment(10));
store.dispatch(increment(20));
