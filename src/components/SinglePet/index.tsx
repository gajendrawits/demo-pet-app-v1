import styled from "styled-components";

export const SinglePet = ({ data }: any) => {
  return (
    <MainWrapper>
      {data?.map((item: any, index: number) => {
        return (
          <ContentWrapper key={index}>
            <Text>Name: {item.name}</Text>
            <Text>Category: {item.category?.name}</Text>
            {/* <Text>Breed: {item?.tags[0]?.name}</Text> */}
            <Text>Status: {item.status}</Text>
            <ButtonWrapper>
              <Button>Add To 🛒</Button>
              <Button>Add To ♥️</Button>
            </ButtonWrapper>
            {/* <Image src={item.photoUrls} alt="Pet Image" /> */}
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
  margin-top: 1vw;
  gap: 1vw;
  padding: 0 1vw;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 15.3vw;
  height: 30vh;
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
// const Image = styled.img`
//   width: 15vw;
//   height: 20vh;
// `;
