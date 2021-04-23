import { combineReducers } from "redux";
import regReducer from "./regReducer";

export default combineReducers({
  data: regReducer,
});
