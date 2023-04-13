export function addFavoriteThing(thing) {
  return {
    type: "ADD_FAVOURITE_THING",
    payload: thing,
  };
}

export function removeFavouriteThing(thing) {
  return {
    type: "REMOVE_FAVOURITE_THING",
    payload: thing,
  };
}

export default function favouriteReducer(favouriteThings = [], action) {
  switch (action.type) {
    case "ADD_FAVOURITE_THING":
      return [...favouriteThings, action.payload];

    case "REMOVE_FAVOURITE_THING": {
      const updateArr = favouriteThings.filter((ft) => ft !== action.payload);
      return updateArr;
    }
    default:
      return favouriteThings;
  }
}
