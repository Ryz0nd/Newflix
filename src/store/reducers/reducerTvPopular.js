import { TV_POPULAR } from "../action/index";

const initialState = {
  contents: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TV_POPULAR:
      return {
        ...state,
        contents: action.data
      };
    default:
      return state;
  }
}
