import { BUY_PET, CLEAR_CART, REMOVE_FROM_CART, WISH_PET } from "./petTypes";

export const buyPet = (petCount: any) => {
  // console.log(petCount, "pets");
  return {
    type: BUY_PET,
    payload: petCount,
  };
};

export const removePet = (removePet: any) => {
  // console.log(removePet, "pets");
  return {
    type: REMOVE_FROM_CART,
    payload: removePet,
  };
};

export const clearAllPets = () => {
  return {
    type: CLEAR_CART,
  };
};

export const wishPet = (wishPet: any) => {
  // console.log(wishPet, "wishpet");
  return {
    type: WISH_PET,
    payload: wishPet,
  };
};
