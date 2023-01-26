import React, { useEffect, useState } from "react";
import img from "../../assets/to-do-list.png";
import classes from "./Bumper.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
const Bumper = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.Bumper} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  const location = useLocation();
  const inHome = location.pathname.split("/")[2]?.toLocaleLowerCase();
  const postCount = useSelector((state) =>
    inHome === "favorite"
      ? state.favorite.length
      : inHome === "trash"
      ? state.trash.length
      : state.post.length
  );
  useEffect(() => {
    if (postCount === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [postCount]);

  return (
    <div className={btnClasses}>
      <span className={classes.icon}>
        <AssignmentIcon sx={{ ml: "3px" }} scale="3" />{" "}
      </span>
      {postCount > 0 && <span className={classes.badge}>{postCount}</span>}
    </div>
  );
};

export default Bumper;
