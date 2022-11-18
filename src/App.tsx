import Categories from "components/Categories";
import { SinglePetDetails } from "components/SinglePetDetails";
import Cart from "pages/cartPage";
import HomePage from "pages/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginAndSignUp from "pages/loginAndSignUp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/loginAndsignup" element={<LoginAndSignUp />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/:category" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singlePetDetails" element={<SinglePetDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
