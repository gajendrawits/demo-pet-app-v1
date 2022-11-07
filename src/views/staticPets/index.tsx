import { staticData } from "data";
import styled from "styled-components";

interface PetsProps {
  name: string;
  breed: string;
  animal: string;
  ImageUrl?: string;
}
function StaticPets() {
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
          </ContentWrapper>
        );
      })}
    </ContentMainWrapper>
  );
}

export default StaticPets;

// styles
const ContentMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 0.5vw;
  padding: 7vw 0;
`;

const ContentWrapper = styled.div`
  width: 24vw;
  height: 40vh;
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
