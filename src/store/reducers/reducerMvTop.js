import { MOVIE_TOP_RATED } from "../action/index";

const initialState = {
  contents: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case MOVIE_TOP_RATED:
      return {
        ...state,
          contents: action.data
        };
    default:
      return state;
  }
}
