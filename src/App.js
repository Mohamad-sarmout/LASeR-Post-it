import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import GetStarted from "./components/GetStarted/GetStarted";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route
        path="/Home/*"
        element={
          <div className="App">
            <Home />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
