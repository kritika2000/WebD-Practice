const initialState = {
  title: "",
  viewCount: 0,
  votes: {
    up: 0,
    down: 0,
  },
};

export function changeYouTubeTitle(title) {
  return {
    type: "CHANGE_YOUTUBE_TITLE",
    payload: title,
  };
}

export function changeViewCount(count) {
  return {
    type: "CHANGE_VIEW_COUNT",
    payload: count,
  };
}

export function upvoteYouTubeVideo() {
  return {
    type: "UPVOTE_VIDEO",
  };
}

export function downvoteYouTubeVideo() {
  return {
    type: "DOWNVOTE_VIDEO",
  };
}

export default function youTubeVideoReducer(
  youTubeVideo = initialState,
  action
) {
  switch (action.type) {
    case "CHANGE_VIEW_COUNT": {
      return {
        ...youTubeVideo,
        viewCount: action.payload,
      };
    }
    case "CHANGE_YOUTUBE_TITLE": {
      return {
        ...youTubeVideo,
        title: action.payload,
      };
    }
    case "UPVOTE_VIDEO": {
      return {
        ...youTubeVideo,
        votes: {
          ...youTubeVideo.votes,
          up: youTubeVideo.votes.up + 1,
        },
      };
    }
    case "DOWNVOTE_VIDEO": {
      return {
        ...youTubeVideo,
        votes: {
          ...youTubeVideo.votes,
          down: youTubeVideo.votes.down - 1,
        },
      };
    }
    default:
      return youTubeVideo;
  }
}
