import React, { useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card/Card";
import Draggable from "react-draggable";
import { useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import AddCard from "./AddCard";
function Home() {
  const [show, setshow] = useState(true);
  const [freeMode, setfreeMode] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const [showAddCard, setShowAddCard] = useState(false);
  const [currentId, setcurrentId] = useState(null);
  const [searchPosts, setsearchPosts] = useState(null)
  return (
    <div style={{ backgroundColor: "#EBEBF0" }} className="Wrap">
      <Navbar isMobile={isMobile} show={show} setshow={setshow} setsearchPosts={setsearchPosts}/>
      <h1
        style={{
          position: "relative",
          top: "10px",
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
      />
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
        />
      </div>
      <AddCard
        showAddCard={showAddCard}
        setShowAddCard={setShowAddCard}
        currentId={currentId}
        setcurrentId={setcurrentId}
      />
      <div className="add" onClick={() => setShowAddCard(true)}>
        <span>+</span>
      </div>
    </div>
  );
}

export default Home;
