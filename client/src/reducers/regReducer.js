import { ADD_ITEM } from "../actions/types";

const initialState = {
  Data: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        Data: [action.payload, ...state.Data],
      };
      break;

    default:
      return state;
  }
}
