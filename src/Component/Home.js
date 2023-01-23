import React, { useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card/Card";
import Draggable from "react-draggable";
import { useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";

function Home() {
  const [show, setshow] = useState(true);
  const [freeMode, setfreeMode] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <div style={{ backgroundColor: "#EBEBF0" }} className="Wrap">
      <Navbar isMobile={isMobile} show={show} setshow={setshow} />
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
        {/* <h1 style={{ position: "relative", left: "390px" }}>Post it</h1> */}

        <Card isMobile={isMobile} show={show} free={freeMode} />
      </div>
      <div className="add">
        <span>+</span>
      </div>
    </div>
  );
}

export default Home;
