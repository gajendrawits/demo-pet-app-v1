import NavBar from "views/navBar";
import styled from "styled-components";
import StaticPets from "views/staticPets";
import PostPets from "views/postPets";
import AllPets from "views/allPets";
import Footer from "views/footer";

const HomePage = () => {
  return (
    <HomePageMainWrapper>
      <NavBar />
      <StaticPets />
      <PostPets />
      <AllPets />
      <Footer />
    </HomePageMainWrapper>
  );
};

export default HomePage;

// styles
const HomePageMainWrapper = styled.div``;
