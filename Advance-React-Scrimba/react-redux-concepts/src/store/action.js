const redux = require("redux");

// Action is an object, which requires type property.
// Actions are defined in caps.
/*
type's value is the description of the kind of change that we 
want to make to the state.
*/
const action = {
  type: "INCREMENT",
};

/**
 * Usually, we don't create action object but create action creaters(functons
 * which return the action object).
 */

function increment() {
  return {
    type: "INCREMENT",
  };
}

console.log(increment());
