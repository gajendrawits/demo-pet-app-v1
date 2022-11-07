import petshop from "assets/images/petshoplogo.jpeg";
import styled from "styled-components";
import { BsCart2, BsBookmarkHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <NavBarMainWrapper>
      <NavLogoWrapper>
        <Link to={"/homepage"}>
          <NavLogo src={petshop} alt="logo" />
        </Link>
      </NavLogoWrapper>
      <NavCategoriesWrapper>
        <Category>Cats</Category>
        <Category>Dogs</Category>
        <Category>Parrots</Category>
        <Category>Rabbits</Category>
      </NavCategoriesWrapper>
      <NavCartWrapper>
        <CartWrapper>
          <BsCart2 />
        </CartWrapper>
        <WishListWrapper>
          <BsBookmarkHeart />
        </WishListWrapper>
      </NavCartWrapper>
    </NavBarMainWrapper>
  );
}

export default NavBar;

// styles
const NavBarMainWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e7e9eb;
  gap: 0.5vw;
  color: #6d8297;
  position: fixed;
`;

const NavLogoWrapper = styled.div`
  width: 10vw;
  padding: 0.3vw;
  display: flex;
  align-items: center;
`;

const NavLogo = styled.img`
  width: 5vw;
  height: auto;
  border-radius: 50%;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const NavCategoriesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70vw;
  font-size: 1.5vw;
  font-weight: 800;
`;

const Category = styled.div`
  :hover {
    cursor: pointer;
    color: #696969;
    transform: scale(1.2);
  }
`;

const NavCartWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 2vw;
  width: 10vw;
`;

const CartWrapper = styled.div`
  :hover {
    cursor: pointer;
    color: #696969;
    transform: scale(1.2);
  }
`;

const WishListWrapper = styled.div`
  :hover {
    cursor: pointer;
    color: #696969;
    transform: scale(1.2);
  }
`;
