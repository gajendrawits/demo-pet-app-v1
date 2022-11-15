import { staticData } from "data";
import { useDispatch } from "react-redux";
import { buyPet, wishPet } from "redux/pet/petActions";
import styled from "styled-components";

interface PetsProps {
  name: string;
  breed: string;
  animal: string;
  ImageUrl?: string;
}
const StaticPets = () => {
  const dispatch = useDispatch();
  return (
    <ContentMainWrapper>
      {staticData.map((pet: PetsProps, index: number) => {
        return (
          <ContentWrapper key={index}>
            <TextWrapper>
              <Text>Name: {pet.name}</Text>
              <Text>Breed: {pet.breed}</Text>
              <Text>Animal: {pet.animal}</Text>
            </TextWrapper>
            <ImgWrapper>
              <Image src={pet?.ImageUrl} alt="img" />
            </ImgWrapper>
            <ButtonWrapper>
              <Button onClick={() => dispatch(buyPet(pet))}>Add To 🛒</Button>
              <WishButton onClick={() => dispatch(wishPet(pet))}>
                Add To ♥️
              </WishButton>
            </ButtonWrapper>
          </ContentWrapper>
        );
      })}
    </ContentMainWrapper>
  );
};

export default StaticPets;

// styles
const ContentMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 0.5vw;
  padding: 9vw 0;
`;

const ContentWrapper = styled.div`
  width: 24vw;
  height: 44vh;
  gap: 0.5vw;
  border-radius: 3%;
  background-color: #e7e9eb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  width: 24vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 1vw;
`;

const WishButton = styled.button`
  font-size: 1vw;
  font-weight: 900;
  background-color: #0bcccf;
  border: none;
  color: #f4a550;
  border-radius: 5%;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
    transform: scale(1.2);
  }
`;

const Button = styled.button`
  font-size: 1vw;
  font-weight: 900;
  background-color: #29abe2;
  border: none;
  color: #f4a550;
  border-radius: 5%;
  cursor: pointer;
  :hover {
    background-color: green;
    color: white;
    transform: scale(1.2);
  }
`;

const Text = styled.div`
  padding: 0.3vw;
  font-size: 1vw;
  font-weight: 700;
  color: #6d8297;
`;

const ImgWrapper = styled.div`
  width: 24vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 20vw;
  height: auto;
  border-radius: 3%;
`;
