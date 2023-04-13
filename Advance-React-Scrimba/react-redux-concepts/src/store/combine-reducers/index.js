// import the separate reducers

// create the store
// export the store
const redux = require("redux");
const { combineReducers, createStore } = redux;
// const countReducer = require("./count");
// const favouriteReducer = require("./favourite");
// const youTubeVideoReducer = require("./youTubeVideo");
import countReducer from "./count";
import favouriteReducer from "./favourite";
import youTubeVideoReducer from "./youTubeVideo";

// combine the reducers into a single state tree
const rootReducer = combineReducers({
  count: countReducer,
  favouriteThings: favouriteReducer,
  youTubeVideo: youTubeVideoReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
