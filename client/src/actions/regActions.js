import { ADD_ITEM } from "./types";
import axios from "axios";

export const addBank = (data) => (dispatch) => {
  axios
    .post("/api/register/bank", data)
    .then((res) => dispatch({ type: ADD_ITEM, payload: res.data }))
    .catch((err) => dispatch(err));
};
