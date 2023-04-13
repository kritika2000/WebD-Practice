/**
 * Reducer is a function whose job is to return a new state.
 * It takes previous state and an action.
 * The role of action is to determine the new state or how the state
 * should be changed based on the action.
 */

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
  // return new state based on the action.
  /*
  if (action.type === "INCREMENT")
    return {
      count: count + 1,
    };
  if (action.type === "DRECEMENT")
    return {
      count: count - 1,
    };
    */
  // switch case is a better option than if

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    /* 
      when we create a store, the reducer will run for the first time
      and action will be null at that time. So, to handle that we need a default state. 
      */
    default:
      return state;
  }
}

/**
 * Challenge:
 *
 * Enable the ability to double and halve the count.
 * If halving, round down instead of letting your count
 * become a decimal.
 */

function double() {
  return {
    type: "DOUBLE",
  };
}

function halve() {
  return {
    type: "HALVE",
  };
}

function reducer(state = { count: 1 }, action) {
  switch (action.type) {
    case "DOUBLE":
      return {
        count: 2 * state.count,
      };
    case "HALVE":
      return {
        count: state.count / 2,
      };
    default:
      return state;
  }
}
//with state as an interger.
function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "DOUBLE":
      return state * 2;
    case "HALVE":
      return Math.round(state / 2);
    default:
      return state;
  }
}
