import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removePet } from "redux/pet/petActions";

const Cart = () => {
  const dispatch = useDispatch();
  const numOfPets = useSelector((state: any) => state.pet.numOfPets);
  console.log(numOfPets, "total items in cart");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div style={{ textAlign: "center", padding: "1vw" }}>
      <button onClick={handleClick}>Back to Home Page</button>
      <h1>Your cart</h1>
      {numOfPets.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <h1>Total Items In Your Cart : {numOfPets.length}</h1>
      )}
      {numOfPets.map((item: any, index: number) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1vw",
            }}
          >
            <h5>PetName: {item.name}</h5>
            <button onClick={() => dispatch(removePet(item))}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
