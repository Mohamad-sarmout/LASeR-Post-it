import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Paper } from "@mui/material";
import { IconButton } from "@mui/material";
import ReactSwitch from "react-switch";

function Navbar({
  isMobile,
  show,
  setshow,
  setsearchPosts,
  theme,
  toggleTheme,
}) {
  console.log(show);
  const handleSearch = (e) => {
    setsearchPosts(e.target.value);
  };
  return (
    <div className="flex" style={{ position: "fixed" }}>
      <span>
        {isMobile && !show && (
          <IconButton onClick={() => setshow(!show)}>
            <MenuIcon sx={{ mb: "-6px", mr: "5px" }} />
          </IconButton>
        )}
        Post it App
      </span>
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
          onChange={handleSearch}
          style={{ width: "80%" }}
        />{" "}
        <IconButton
          type="submit"
          sx={{ color: "#68E1FD" }}
          className="searchIcon"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <span style={{ display: "flex", alignItems: "center" }}>
        <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>&nbsp;
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === "dark"}
          onColor="#296fe6"
        />
      </span>
    </div>
  );
}

export default Navbar;
