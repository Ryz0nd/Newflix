import { TV_AIRING } from "../action/index";

const initialState = {
  contents: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TV_AIRING:
      return {
        ...state,
        contents: action.data
      };
    default:
      return state;
  }
}
