import React, { useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card/Card";
import Draggable from "react-draggable";
import { useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import  AddCard  from "./AddCard";
function Home() {
  const [show, setshow] = useState(true);
  const [freeMode, setfreeMode] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const [showAddCard,setShowAddCard] = useState(false);
  return (
    <div style={{ backgroundColor: "#EBEBF0" }} className="Wrap">
      <Navbar isMobile={isMobile} show={show} setshow={setshow} />
      <Sidebar
        show={show}
        setshow={setshow}
        isMobile={isMobile}
        setfreeMode={setfreeMode}
        mode={freeMode}
      />
      <div className="Main">
      <Card isMobile={isMobile} show={show} free={freeMode} setShowAddCard={setShowAddCard}/>
      </div>
      <AddCard showAddCard={showAddCard} setShowAddCard={setShowAddCard}/>
    </div>
  );
}

export default Home;
