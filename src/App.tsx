import HomePage from "pages/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginAndSignUp from "./pages/loginAndSignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginAndSignUp />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
