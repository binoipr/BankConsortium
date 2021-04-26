import { ADD_BANK, ADD_COMPANY } from "./types";
import axios from "axios";

export const addBank = (data) => (dispatch) => {
  axios
    .post("/api/register/bank", data)
    .then((res) => dispatch({ type: ADD_BANK, payload: res.data }))
    .catch((err) => dispatch(err));
};

export const addCompany = (data) => (dispatch) => {
  axios
    .post("/api/register/company", data)
    .then((res) => dispatch({ type: ADD_COMPANY, payload: res.data }))
    .catch((err) => dispatch(err));
};
