import { combineReducers } from "redux";
import petReducer from "./pet/petReducer";

const rootReducer = combineReducers({
  pet: petReducer,
});

export default rootReducer;
