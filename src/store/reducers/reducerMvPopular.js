import { MOVIE_POPULAR } from "../action/index";

const initialState = {
  contents: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MOVIE_POPULAR:
      return {
        ...state,
        contents: action.data
      };
    default:
      return state;
  }
}
