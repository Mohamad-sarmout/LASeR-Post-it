import React, { createContext, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card/Card";
import { useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import AddCard from "./AddCard";
import { Route, Routes, useLocation } from "react-router";

export const ThemeContext = createContext(null);

function Home() {
  const [show, setshow] = useState(true);
  const [freeMode, setfreeMode] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const [showAddCard, setShowAddCard] = useState(false);
  const [currentId, setcurrentId] = useState("");
  const [searchPosts, setsearchPosts] = useState(null);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const location = useLocation();
  const inHome = location.pathname.split("/")[2]?.toLocaleLowerCase();
  // console.log(inHome);
  if (inHome === "favorite") {
    // alert(inHome);
    console.log("b");
  } else if (inHome == "trash") {
    // alert(inHome);
    console.log("c");
  } else {
    // alert(inHome);
    console.log("A");
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ backgroundColor: "#EBEBF0" }} className="Wrap" id={theme}>
        <Navbar
          isMobile={isMobile}
          show={show}
          setshow={setshow}
          setsearchPosts={setsearchPosts}
          toggleTheme={toggleTheme}
          theme={theme}
        />
        <h1
          style={{
            position: "relative",
            top: "70px",
            left: isMobile ? (show ? "4rem" : "3rem") : "250px",
          }}
        >
          Post it
        </h1>

        <Sidebar
          show={show}
          setshow={setshow}
          isMobile={isMobile}
          setfreeMode={setfreeMode}
          mode={freeMode}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div className="Main">
                <Card
                  isMobile={isMobile}
                  show={show}
                  free={freeMode}
                  setShowAddCard={setShowAddCard}
                  currentId={currentId}
                  setcurrentId={setcurrentId}
                  searchPosts={searchPosts}
                  setsearchPosts={setsearchPosts}
                  reducer="Home"
                />
              </div>
            }
          />
          <Route
            path="/favorite"
            element={
              <div className="Main">
                <Card
                  isMobile={isMobile}
                  show={show}
                  free={freeMode}
                  setShowAddCard={setShowAddCard}
                  currentId={currentId}
                  setcurrentId={setcurrentId}
                  searchPosts={searchPosts}
                  setsearchPosts={setsearchPosts}
                  reducer="Favorite"
                />
              </div>
            }
          />
          <Route
            path="/trash"
            element={
              <div className="Main">
                <Card
                  isMobile={isMobile}
                  show={show}
                  free={freeMode}
                  setShowAddCard={setShowAddCard}
                  currentId={currentId}
                  setcurrentId={setcurrentId}
                  searchPosts={searchPosts}
                  setsearchPosts={setsearchPosts}
                  reducer="Trash"
                />
              </div>
            }
          />
        </Routes>
        <AddCard
          showAddCard={showAddCard}
          setShowAddCard={setShowAddCard}
          currentId={currentId}
          setcurrentId={setcurrentId}
        />
        {!inHome && (
          <div className="add" onClick={() => setShowAddCard(true)}>
            <span>+</span>
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default Home;
