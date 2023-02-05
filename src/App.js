import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import GetStarted from "./components/GetStarted/GetStarted";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route
        path="/login"
        element={user ? <Navigate to={"/home"} /> : <Login />}
      />
      <Route
        path="/signUp"
        element={user ? <Navigate to={"/home"} /> : <SignUp />}
      />
      <Route
        path="/Home/*"
        element={
          <>
            {!user ? (
              <Navigate to={"/login"} />
            ) : (
              <div className="App">
                <Home />
              </div>
            )}
          </>
        }
      />
    </Routes>
  );
}

export default App;
