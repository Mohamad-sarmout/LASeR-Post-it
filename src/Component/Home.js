import React, { useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card/Card";
import Draggable from "react-draggable";
import { useMediaQuery } from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";

function Home() {
  const [show, setshow] = useState(true);
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <div style={{ backgroundColor: "#EBEBF0" }} className="Wrap">
      <Sidebar show={show} setshow={setshow} isMobile={isMobile} />
      <Navbar />
      <div className="Main">
        <div className="SideBar"></div>
        <Card />
      </div>
    </div>
  );
}

export default Home;
