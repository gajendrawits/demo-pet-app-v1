import { BUY_PET, REMOVE_FROM_CART } from "./petTypes";

const initialState = {
  numOfPets: [],
};

const petReducer = (state = initialState, action: any) => {
  console.log(action.payload, "payload");

  switch (action.type) {
    case BUY_PET:
      const find = state.numOfPets?.find((item: any) =>
        item.id === action.payload ? true : false
      );
      return {
        ...state,
        numOfPets: find
          ? state.numOfPets
          : [...state.numOfPets, action.payload],
      };

    default:
      return state;
  }
};

export default petReducer;
