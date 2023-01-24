import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Paper } from "@mui/material";
import { IconButton } from "@mui/material";
import ReactSwitch from 'react-switch';
function Navbar({ isMobile, show, setshow, toggleTheme, theme }) {


  return (
    <div id="navbar" className="flex">
      <span>
        {isMobile && !show && (
          <IconButton onClick={() => setshow(!show)}>
            <MenuIcon sx={{ mb: "-6px", mr: "5px" }} />
          </IconButton>
        )}
        Post it App
      </span>
      <form>
        <Paper
          component="form"
          sx={{
            borderRadius: 20,
            border: "1px solid #e3e3e3",
            pl: 2,
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mr: { sm: 5 },
            width: { xs: "100px", sm: "150px", md: "200px" },
            height: { xs: "30px", sm: "30px", md: "30px" },
          }}
        >
          <input className="search-bar" placeholder="Search..." type="text" />{" "}
          <IconButton className="searchIcon" type="submit" sx={{ color: "#68E1FD" }}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </form>
      <span style={{display:"flex", alignItems:"center"}}>
        {/* <Brightness4Icon /> */}
        <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>&nbsp;
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} onColor="#86d3ff"
/>
      </span>
    </div>
  );
}

export default Navbar;
