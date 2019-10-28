import { TV_TOP_RATED } from "../action/index";

const initialState = {
  isLoading: true,
  contents: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TV_TOP_RATED:
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
