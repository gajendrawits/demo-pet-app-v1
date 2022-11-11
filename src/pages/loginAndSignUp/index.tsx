import React, { useState } from "react";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import styled from "styled-components";
// import NavBar from "views/navBar";
// import Footer from "views/footer";

function LoginAndSignUp() {
  const [show, setShow] = useState(true);

  return (
    <MainWrapper>
      {/* <NavBar /> */}
      {show ? <Login setShow={setShow} /> : <SignUp setShow={setShow} />}
      {/* <Footer /> */}
    </MainWrapper>
  );
}

export default LoginAndSignUp;

// styles
const MainWrapper = styled.div`
  background-color: #f0f0f0;
`;
