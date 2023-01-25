import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import Favorite from "@mui/icons-material/Favorite";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton, Switch } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { useState } from "react";

const Sidebar = ({ show, setshow, isMobile, setfreeMode, mode }) => {
  const [isOn, setisOn] = useState(false);
  const Root = styled(Box)(({ theme }) => ({
    zIndex: "30",
    [theme.breakpoints.down("md")]: {
      width: show ? "70px" : "0px",
      overflow: "auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "180px",
    },
  }));
  const label = { inputProps: { "aria-label": "switch mode" } };

  return (
    <>
      <IconButton 
        sx={{ mt: "-100px", ml: "-33px", width: "300px" }}
        onClick={() => setshow(!show)}
      >
        <MenuIcon />
      </IconButton>
      <Root className={classes.flex} id="sidebar">
        <div className={classes.start}>
          {/* <div> */}

          <Switch
            {...label}
            checked={isOn}
            onClick={(e) => {
              setfreeMode(e.target.checked);
              setisOn(e.target.checked);
            }}
            title="Switch for free mode"
          />

          {isMobile && (
            <IconButton 
              onClick={() => setshow(!show)}
              sx={{ display: { md: "none", lg: "none" } }}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}
        </div>
        <NavLink
          to="/"
          className={classes.link}
          style={({ isActive }) =>
            isActive ? { background: "rgb(165, 164, 164)" } : undefined
          }
        >
          <AllInboxIcon className="icons" />
          {!isMobile && <span className="text">All Posts</span>}
        </NavLink>
        <Divider />
        <NavLink
          to="Favorite"
          className={classes.link}
          style={({ isActive }) =>
            isActive ? { background: "rgb(165, 164, 164)" } : undefined
          }
        >
          <Favorite className="icons" /> {!isMobile && <span className="text">Favorite</span>}
        </NavLink>
        <Divider />
        <NavLink
          to="Trash"
          className={classes.link}
          style={({ isActive }) =>
            isActive ? { background: "rgb(165, 164, 164)" } : undefined
          }
        >
          <DeleteOutlineIcon className="icons" />
          {!isMobile && <span className="text">Trash</span>}
        </NavLink>
        
        <Divider />
        <Divider />
      </Root>
    </>
  );
};

export default Sidebar;
