import { BUY_PET } from "./petTypes";

export const buyPet = (petCount: any) => {
  console.log(petCount, "pets");
  return {
    type: BUY_PET,
    payload: petCount,
  };
};
