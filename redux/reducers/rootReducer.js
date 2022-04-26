import { combineReducers } from "redux";
import userReducer from "./uData";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
