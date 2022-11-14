import { combineReducers } from "redux";
import petReducer from "./pet/petReducer";

const rootReducer = combineReducers({
  pet: petReducer,
  removePet: petReducer,
});

export default rootReducer;
