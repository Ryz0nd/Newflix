import { TV_LATEST } from "../action/index";

const initialState = {
  contents: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TV_LATEST:
      return {
        ...state,
          contents: action.data
      };
    default:
      return state;
  }
}
