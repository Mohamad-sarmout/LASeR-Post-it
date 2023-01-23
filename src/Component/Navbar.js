import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Paper } from "@mui/material";
import { IconButton } from "@mui/material";

function Navbar({ isMobile, show, setshow }) {
  console.log(show);
  return (
    <div className="flex">
      <span>
        {isMobile && !show && (
          <IconButton onClick={() => setshow(!show)}>
            <MenuIcon sx={{ mb: "-6px", mr: "5px" }} />
          </IconButton>
        )}
        Post it App
      </span>
      {/* <form> */}
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
        <input
          className="search-bar"
          id="search"
          name="search"
          placeholder="Search..."
          type="text"
          onChange={(e) => console.log({ [e.target.name]: e.target.value })}
        />{" "}
        <IconButton type="submit" sx={{ color: "#68E1FD" }}>
          <SearchIcon />
        </IconButton>
      </Paper>
      {/* </form> */}
      <span>
        <Brightness4Icon />
      </span>
    </div>
  );
}

export default Navbar;
