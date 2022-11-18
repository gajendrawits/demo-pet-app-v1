import petshop from "assets/images/logo.jpeg";
import styled from "styled-components";
import { BsCart2, BsBookmarkHeart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "components/Modal";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const numOfPets = useSelector((state: any) => state.pet.numOfPets);
  // console.log(numOfPets, "total items in cart");
  const wishPets = useSelector((state: any) => state.wishPet.wishPets);
  // console.log(wishPets, "wishpets");
  const token = localStorage.getItem("token");
  console.log(token, "navtoken");

  const handleLogOut = () => {
    console.log("logout");
    setOpen(true);
  };

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
          <Link to={"/cart"}>
            <CartShowItems>{numOfPets.length}</CartShowItems>
            <BsCart2 className="icons" />
          </Link>
        </CartWrapper>
        <WishListWrapper>
          <Link to={"#"}>
            <WishListShow>{wishPets.length}</WishListShow>
            <BsBookmarkHeart className="icons" />
          </Link>
        </WishListWrapper>
        {token ? (
          <AccWrapper>
            <CiLogout className="icons" onClick={handleLogOut} />
          </AccWrapper>
        ) : (
          <AccWrapper>
            <Link to={"/loginAndsignup"} className="links">
              <VscAccount className="icons" />
            </Link>
          </AccWrapper>
        )}
      </NavCartWrapper>
      {open ? <Modal open={open} isClose={() => setOpen(false)} /> : null}
    </NavBarMainWrapper>
  );
};

export default NavBar;

// styles
const NavBarMainWrapper = styled.div`
  width: 100%;
  z-index: 1;
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
  align-items: center;
  justify-content: space-evenly;
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
  .icons {
    color: #6d8297;
    position: relative;
    :hover {
      color: #29abe2;
    }
  }
`;

const CartWrapper = styled.div`
  font-size: 2.6vw;
  :hover {
    cursor: pointer;
  }
`;

const CartShowItems = styled.div`
  position: absolute;
  background-color: black;
  color: white;
  border-radius: 50%;
  top: 1.7vw;
  right: 10.7vw;
  font-size: 1vw;
  padding: 1px 6px;
  z-index: 1;
  :hover {
    transform: scale(1.2);
    background-color: #29abe2;
    color: black;
  }
`;

const WishListWrapper = styled.div`
  font-size: 2vw;
  :hover {
    cursor: pointer;
    color: #696969;
    .icons {
      :hover {
        color: red;
      }
    }
  }
`;

const AccWrapper = styled.div`
  font-size: 2vw;
  :hover {
    cursor: pointer;
    color: #696969;
  }
`;
const WishListShow = styled.div`
  position: absolute;
  background-color: black;
  color: white;
  z-index: 1;
  border-radius: 50%;
  top: 1.7vw;
  right: 7.9vw;
  font-size: 1vw;
  padding: 1px 4px;
  :hover {
    transform: scale(1.3);
    background-color: red;
    color: black;
  }
`;
