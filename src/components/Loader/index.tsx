import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <MainLoader />
    </Wrapper>
  );
};

export default Loader;

// styles
const Wrapper = styled.div`
  height: 67vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MainLoader = styled.div`
  border: 1vw solid #f3f3f3;
  border-radius: 50%;
  border-top: 1vw solid green;
  border-right: 1vw solid #29abe2;
  border-left: 1vw solid #29abe2;
  border-bottom: 1vw solid green;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
