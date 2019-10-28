import { NETFLIX_ORIGINAL } from "../action/index";

const initialState = {
  contents: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NETFLIX_ORIGINAL:
      return {
        ...state,
        contents: action.data
      };
    default:
      return state;
  }
}
