import petshop from "assets/images/logo.jpeg";
import styled from "styled-components";
import { BsCart2, BsBookmarkHeart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const numOfPets = useSelector((state: any) => state.pet.numOfPets);
  console.log(numOfPets, "total items in cart");
  return (
    <NavBarMainWrapper>
      <NavLogoWrapper>
        <Link to={"/"}>
          <NavLogo src={petshop} alt="logo" />
        </Link>
      </NavLogoWrapper>
      <NavCategoriesWrapper>
        <Link to={"/doggie"} className="links">
          Dogs
        </Link>
        <Link to={"/fish"} className="links">
          Fish
        </Link>
      </NavCategoriesWrapper>
      <NavCartWrapper>
        <CartWrapper>
          <CartShowItems>{numOfPets.length}</CartShowItems>
          <BsCart2 />
        </CartWrapper>
        <WishListWrapper>
          <BsBookmarkHeart />
        </WishListWrapper>
        <Link to={"/loginAndsignup"} className="links">
          <VscAccount />
        </Link>
      </NavCartWrapper>
    </NavBarMainWrapper>
  );
};

export default NavBar;

// styles
const NavBarMainWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e7e9eb;
  gap: 0.5vw;
  color: #6d8297;
  padding: 0.5vw;
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
  .links {
    text-decoration: none;
    color: #6d8297;
    :hover {
      cursor: pointer;
      color: #696969;
      transform: scale(1.2);
    }
  }
`;

const NavCartWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 2.5vw;
  width: 10vw;
  .links {
    text-decoration: none;
    color: #6d8297;
    :hover {
      cursor: pointer;
      color: green;
      transform: scale(1.2);
    }
  }
`;

const CartWrapper = styled.div`
  :hover {
    cursor: pointer;
  }
`;

const CartShowItems = styled.div`
  position: absolute;
  background-color: black;
  color: white;
  border-radius: 50%;
  top: 26%;
  left: 87.9%;
  font-size: 1vw;
  padding: 2px 7px;
  :hover {
    transform: scale(1.2);
    background-color: green;
  }
`;
const WishListWrapper = styled.div`
  :hover {
    cursor: pointer;
    color: #696969;
    transform: scale(1.2);
  }
`;
