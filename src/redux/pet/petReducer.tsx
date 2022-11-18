import { BUY_PET, CLEAR_CART, REMOVE_FROM_CART } from "./petTypes";

const initialState = {
  numOfPets: [],
};

const petReducer = (state = initialState, action: any) => {
  // console.log(action.payload, "payload1");

  switch (action.type) {
    case BUY_PET:
      const find = state.numOfPets?.find((item: any) =>
        item === action.payload ? true : false
      );
      return {
        ...state,
        numOfPets: find
          ? state.numOfPets
          : [...state.numOfPets, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        numOfPets: state.numOfPets.filter((curItem: any) => {
          return curItem !== action.payload;
        }),
      };

    case CLEAR_CART:
      return {
        ...state,
        numOfPets: [],
      };

    default:
      return state;
  }
};

export default petReducer;
