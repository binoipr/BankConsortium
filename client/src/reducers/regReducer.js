import { ADD_BANK, ADD_COMPANY } from "../actions/types";

const initialState = {
  Data: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_BANK:
      return {
        ...state,
        Data: [action.payload, ...state.Data],
      };
      break;
    case ADD_COMPANY:
      return {
        ...state,
        Data: [action.payload, ...state.Data],
      };
      break;

    default:
      return state;
  }
}
