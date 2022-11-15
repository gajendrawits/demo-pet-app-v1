import styled from "styled-components";
import { useDispatch } from "react-redux";
import { buyPet, wishPet } from "redux/pet/petActions";

export const SinglePet = ({ data }: any) => {
  const dispatch = useDispatch();

  return (
    <MainWrapper>
      {data?.map((item: any, index: number) => {
        return (
          <ContentWrapper key={index}>
            <Text>Name: {item?.name}</Text>
            <Text>Category: {item?.category?.name}</Text>
            <Text>Breed: {item?.tags[0]?.name}</Text>
            <Text>Status: {item?.status}</Text>
            <ButtonWrapper>
              <Button onClick={() => dispatch(buyPet(item))}>Add To 🛒</Button>
              <WishButton onClick={() => dispatch(wishPet(item))}>
                Add To ♥️
              </WishButton>
            </ButtonWrapper>
            <ImageWrapper>
              <Image src={item?.photoUrls} alt={item?.name} />
            </ImageWrapper>
          </ContentWrapper>
        );
      })}
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1vw;
  padding: 1vw 1vw;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 15.3vw;
  height: 35vh;
  background-color: #e7e9eb;
  border-radius: 3%;
  box-shadow: 0.5vw 0.5vw #8fafce;
  :hover {
    transform: scale(0.9);
  }
`;
const Text = styled.div`
  font-size: 1vw;
  font-weight: 700;
  color: #6d8297;
  padding: 0.5vw;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1vw;
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
const ImageWrapper = styled.div`
  padding: 1vw 0;
`;
const Image = styled.img`
  width: 2.6vw;
  height: auto;
`;
