import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

export const SinglePetDetails = () => {
  const { state } = useLocation();
  // console.log(state, "state");

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <MainWrapper>
      <PetWrapper>
        <BackButton onClick={handleBack}>⬅Back</BackButton>
        <Text>Name : {state.name}</Text>
        <Text>Status : {state.status}</Text>
        <Text>Category : {state?.category?.name}</Text>
        <Text>Breed : {state?.tags?.[0].name}</Text>
        <Image src={state?.photoUrls} alt="img" />
      </PetWrapper>
    </MainWrapper>
  );
};

//styles

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #1ff81f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PetWrapper = styled.div``;
const Text = styled.div`
  font-size: 2vw;
  font-weight: 900;
  color: white;
  padding: 1vw;
  :hover {
    transform: scale(1.2);
  }
`;
const Image = styled.img`
  font-size: 2vw;
  padding: 1vw 5vw;
`;

const BackButton = styled.button`
  background-color: #2e85f7;
  border-radius: 5%;
  border: none;
  color: white;
  font-size: 1vw;
  font-weight: 500;
  margin-left: 1.5vw;
  :hover {
    cursor: pointer;
    background-color: red;
    color: black;
    transform: scale(1.2);
    border: none;
  }
`;
