import { MOVIE_PLAYING } from "../action/index";

const initialState = {
  contents: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MOVIE_PLAYING:
      return {
        ...state,
        contents: action.data
      };
    default:
      return state;
      
  }
}
