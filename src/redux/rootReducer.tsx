import { combineReducers } from "redux";
import petReducer from "./pet/petReducer";
import wishPetReducer from "./pet/wishReducer";

const rootReducer = combineReducers({
  pet: petReducer,
  removePet: petReducer,
  wishPet: wishPetReducer,
});

export default rootReducer;
