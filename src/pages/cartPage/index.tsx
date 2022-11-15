import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAllPets, removePet } from "redux/pet/petActions";
import styled from "styled-components";

const Cart = () => {
  const dispatch = useDispatch();
  const numOfPets = useSelector((state: any) => state.pet.numOfPets);
  console.log(numOfPets, "total items in cart");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <MainWrapper style={{}}>
      <BackButton onClick={handleClick}>⬅Back to Home Page</BackButton>
      {numOfPets.length > 0 ? (
        <ClearCartButton onClick={() => dispatch(clearAllPets())}>
          Clear cart
        </ClearCartButton>
      ) : null}
      <Heading>Your cart</Heading>
      {numOfPets.length === 0 ? (
        <CartHeading>Your cart is empty</CartHeading>
      ) : (
        <CartHeading>Total Items In Your Cart : {numOfPets.length}</CartHeading>
      )}
      {numOfPets.map((item: any, index: number) => {
        return (
          <ItemWrapper key={index}>
            <ItemName key={index}>Name: {item.name}</ItemName>
            <RemoveButton onClick={() => dispatch(removePet(item))}>
              Remove
            </RemoveButton>
          </ItemWrapper>
        );
      })}
    </MainWrapper>
  );
};

export default Cart;

//styles
const MainWrapper = styled.div`
  text-align: center;
  padding: 1vw;
`;
const BackButton = styled.button`
  background-color: #2e85f7;
  border-radius: 3%;
  border: none;
  color: white;
  font-size: 0.8vw;
  font-weight: 500;
  :hover {
    cursor: pointer;
    background-color: pink;
    color: black;
    transform: scale(1.2);
  }
`;
const Heading = styled.h1``;
const CartHeading = styled.h2``;
const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
`;

const ItemName = styled.div`
  font-size: 1vw;
  font-weight: 700;
  padding: 1vw;
`;

const RemoveButton = styled.button`
  background-color: red;
  border-radius: 5%;
  border: none;
  color: white;
  font-size: 0.8vw;
  font-weight: 500;
  padding: 0.2vw;
  :hover {
    cursor: pointer;
    background-color: pink;
    color: black;
    transform: scale(1.2);
  }
`;
const ClearCartButton = styled.button`
  background-color: green;
  border-radius: 5%;
  border: none;
  color: white;
  font-size: 0.8vw;
  font-weight: 500;
  margin-left: 2vw;
  padding: 0.2vw;
  :hover {
    cursor: pointer;
    background-color: red;
    color: black;
    transform: scale(1.2);
  }
`;
