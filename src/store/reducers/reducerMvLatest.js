import { MOVIE_LATEST } from "../action/index";

const initialState = {
  isLoading: true,
  contents: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case MOVIE_LATEST:
      return [
        ...state,
        {
          isLoading: false,
          contents: action.data
        }
      ];
    default:
      return state;
  }
}
