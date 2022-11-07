import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const AllPets = () => {
  const [data, setData] = useState<any>();
  console.log(data, "alldata");

  const fetchPets = async () => {
    await axios
      .get("https://petstore.swagger.io/v2/pet/findByStatus?status=available")
      .then((response) => setData(response.data));
  };
  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <>
      <Heading>All Pets</Heading>
      <MainWrapper>
        {data?.map((item: any, index: number) => {
          return (
            <ContentWrapper key={index}>
              <Text>Name: {item.name}</Text>
              <Text>Category: {item.category?.name}</Text>
              <Text>Breed: {item?.tags[0]?.name}</Text>
              <Text>Status: {item.status}</Text>
              {/* <Image src={item.photoUrls} alt="Pet Image" /> */}
            </ContentWrapper>
          );
        })}
      </MainWrapper>
    </>
  );
};

export default AllPets;

// styles
const Heading = styled.div`
  font-size: 2vw;
  font-weight: 800;
  margin-top: 1vw;
  margin-left: 1.5vw;
`;
const MainWrapper = styled.div`
  display: flex;
  align-items: center;
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
// const Image = styled.img`
//   width: 15vw;
//   height: 20vh;
// `;
