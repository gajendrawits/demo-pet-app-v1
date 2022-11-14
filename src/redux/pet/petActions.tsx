import { BUY_PET } from "./petTypes";
import { REMOVE_FROM_CART } from "./petTypes";

export const buyPet = (petCount: any) => {
  console.log(petCount, "pets");
  return {
    type: BUY_PET,
    payload: petCount,
  };
};

export const removePet = (removePet: any) => {
  console.log(removePet, "pets");
  return {
    type: REMOVE_FROM_CART,
    payload: removePet,
  };
};
