import React, { useState } from "react";
import Login from "components/Login";
import SignUp from "components/SignUp";
import styled from "styled-components";

const LoginAndSignUp = () => {
  const [show, setShow] = useState(true);

  return (
    <MainWrapper>
      {show ? <Login setShow={setShow} /> : <SignUp setShow={setShow} />}
    </MainWrapper>
  );
};

export default LoginAndSignUp;

// styles
const MainWrapper = styled.div`
  background-color: #f0f0f0;
`;
