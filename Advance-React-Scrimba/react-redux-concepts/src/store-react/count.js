import redux, { createStore } from "redux";

export function increment() {
  return {
    type: "INCREMENT",
  };
}

export function decrement() {
  return {
    type: "DECREMENT",
  };
}

function reducer(count = 42, action) {
  switch (action.type) {
    case "INCREMENT":
      return count + 1;
    case "DECREMENT":
      return count - 1;
    default:
      return count;
  }
}

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
export default store;
