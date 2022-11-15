import { WISH_PET } from "./petTypes";

const initialState = {
  wishPets: [],
};

const wishPetReducer = (state = initialState, action: any) => {
  console.log(action.payload, "payload2");

  switch (action.type) {
    case WISH_PET:
      const find = state.wishPets?.find((item: any) =>
        item === action.payload ? true : false
      );
      return {
        ...state,
        wishPets: find ? state.wishPets : [...state.wishPets, action.payload],
      };

    default:
      return state;
  }
};

export default wishPetReducer;
