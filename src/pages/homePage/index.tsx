import React from "react";
import NavBar from "views/navBar";
import { StaticPets } from "data";
import styled from "styled-components";
interface PetsProps {
  name: string;
  breed: string;
  animal: string;
  ImageUrl?: string;
}

function HomePage() {
  return (
    <HomePageMainWrapper>
      <NavBar />
      <ContentMainWrapper>
        {StaticPets.map((pet: PetsProps, index: number) => {
          return (
            <ContentWrapper>
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
    </HomePageMainWrapper>
  );
}

export default HomePage;

// styles
const HomePageMainWrapper = styled.div``;

const ContentMainWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5vw;
  padding: 1.5vw 0;
`;

const ContentWrapper = styled.div`
  width: 33vw;
  gap: 0.5vw;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33vw;
`;

const Text = styled.div`
  padding: 0.5vw;
  font-size: 1vw;
  font-weight: 700;
  color: #6d8297;
`;

const ImgWrapper = styled.div`
  width: 33vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 30vw;
  height: 40vh;
`;
