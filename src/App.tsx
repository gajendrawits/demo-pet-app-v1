import Categories from "components/Categories";
import HomePage from "pages/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginAndSignUp from "./pages/loginAndSignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/loginAndsignup" element={<LoginAndSignUp />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/:category" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
