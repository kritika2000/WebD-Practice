const redux = require("redux");

const initialState = {
  count: 0,
  favouriteThings: [],
};

function changeCount(amount = 1) {
  return {
    type: "CHANGE_COUNT",
    payload: amount,
  };
}

function addFavoriteThing(thing) {
  return {
    type: "ADD_FAVOURITE_THING",
    payload: thing,
  };
}

function reducer(state = initialState, action) {
  // return new state based on the incoming action.type
  switch (action.type) {
    case "CHANGE_COUNT":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "ADD_FAVOURITE_THING":
      return {
        ...state,
        favouriteThings: [...state.favouriteThings, action.payload],
      };
    default:
      return state;
  }
}

const store = redux.createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(changeCount(10));
// store.dispatch(changeCount(-2));
// store.dispatch(changeCount(1));
store.dispatch(addFavoriteThing("hello"));
store.dispatch(addFavoriteThing("kritika"));
