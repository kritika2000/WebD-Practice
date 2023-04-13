const redux = require("redux");

const initialState = {
  count: 0,
  favouriteThings: [],
  youTube: {
    title: "",
    viewCount: 0,
    votes: {
      up: 0,
      down: 0,
    },
  },
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

function removeFavouriteThing(thing) {
  return {
    type: "REMOVE_FAVOURITE_THING",
    payload: thing,
  };
}

function changeYouTubeTitle(title) {
  return {
    type: "CHANGE_YOUTUBE_TITLE",
    payload: title,
  };
}

function changeViewCount(count) {
  return {
    type: "CHANGE_VIEW_COUNT",
    payload: count,
  };
}

function upvoteYouTubeVideo() {
  return {
    type: "UPVOTE_VIDEO",
  };
}

function downvoteYouTubeVideo() {
  return {
    type: "DOWNVOTE_VIDEO",
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
    case "REMOVE_FAVOURITE_THING": {
      const updateArr = state.favouriteThings.filter(
        (ft) => ft !== action.payload
      );
      return {
        ...state,
        favouriteThings: updateArr,
      };
    }
    case "CHANGE_VIEW_COUNT": {
      return {
        ...state,
        youTube: {
          ...state.youTube,
          viewCount: action.payload,
        },
      };
    }
    case "CHANGE_YOUTUBE_TITLE": {
      return {
        ...state,
        youTube: {
          ...state.youTube,
          title: action.payload,
        },
      };
    }
    case "UPVOTE_VIDEO": {
      return {
        ...state,
        youTube: {
          ...state.youTube,
          votes: {
            ...state.youTube.votes,
            up: state.youTube.votes.up + 1,
          },
        },
      };
    }
    case "DOWNVOTE_VIDEO": {
      return {
        ...state,
        youTube: {
          ...state.youTube,
          votes: {
            ...state.youTube.votes,
            down: state.youTube.votes.down - 1,
          },
        },
      };
    }
    default:
      return state;
  }
}

const store = redux.createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(changeCount(10));
// store.dispatch(addFavoriteThing("hello"));
// store.dispatch(addFavoriteThing("kritika"));
// store.dispatch(addFavoriteThing("how"));
// store.dispatch(addFavoriteThing("are"));
// store.dispatch(addFavoriteThing("you?"));
// store.dispatch(removeFavouriteThing("kritika"));
// store.dispatch(removeFavouriteThing("how"));
store.dispatch(changeYouTubeTitle("Learn React JS"));
store.dispatch(changeYouTubeTitle("Learn Web Dev"));
store.dispatch(changeViewCount(22));
store.dispatch(changeYouTubeTitle("Learn JavaScript"));
store.dispatch(upvoteYouTubeVideo());
store.dispatch(upvoteYouTubeVideo());
store.dispatch(upvoteYouTubeVideo());
store.dispatch(downvoteYouTubeVideo());
