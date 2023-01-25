import { IconButton } from "@mui/material";
import React, { useState } from "react";
import Draggable from "react-draggable";
import "../Card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RestoreIcon  from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import moment from "moment/moment";
import { DELETE_POST, ADD_TASK } from "../../../store/action/PostAction";
import { useLocation } from "react-router";
import { FAV_POST, REV_POST } from "../../../store/action/FavoriteAction";
const Post = ({
  isMobile,
  setcurrentId,
  setShowAddCard,
  card,
  index,
  free,
}) => {
  const dispatch = useDispatch();
  const [isDrag, setisDrag] = useState(true);
  const [isActive, setisActive] = useState(false);
  const location = useLocation();
  const inHome = location.pathname.split("/")[2]?.toLocaleLowerCase();
  console.log(inHome);

 const handleAll = (card) => {
    if (inHome == "favorite") {
      console.log(inHome);
      setisActive(false);
      dispatch({ type: REV_POST, value: card.id });

    } else if (inHome == "trash") {
      console.log(inHome);
    } else {
      if (isActive) {
        setisActive(false);
        dispatch({type:REV_POST,value:card.id});
      } else {
        setisActive(true);
        dispatch({type:FAV_POST,value:card});
      }
    }
  };
  return (
    <Draggable
      key={index}
      // cancel="true"
      disabled={free && isDrag ? (isMobile ? false : false) : true}
      axis="both"
      bounds="parent"
      onStart={() => {
        setisDrag(true);
      }}
      onStop={() => {
        // setisDrag(false);
      }}
      onDrag={() => console.log("drag")}
      onMouseDown={() => {
        setisDrag(true);
      }}
    >
      <div
        onClick={() => {
          setisDrag(true);
        }}
        className="Card"
        key={card}
        style={{
          padding: "10px",
          // overflow: "scroll",
          width: "auto",
          height: "auto",
          maxWidth: isMobile ? "280px" : "330px",
          maxHeight: "280px",
          color: card?.fontColor,
          backgroundColor: card?.color,
          fontFamily: card.stylefont,
        }}
      >
        <div className="row">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>{card.title}</h3>
            <h6>{moment(card?.date).fromNow()}</h6>
          </div>
          <div>
            <IconButton className="icons" onClick={handleAll.bind(null, card)}>
            { (inHome === "favorite" || isActive) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            {inHome === "trash" &&  
            <IconButton>
            <RestoreIcon/>
            </IconButton>}
            <IconButton
              className="icons"
              onClick={() => dispatch({ type: DELETE_POST, value: card.id })}
            >
              <DeleteIcon />
            </IconButton>
            {!inHome && 
            <IconButton
              onClick={() => {
                setcurrentId(card.id);
                setShowAddCard((prevState) => !prevState);
              }}
            >
              <EditIcon />
            </IconButton>}
          </div>
        </div>
        <div>
          {card.Text.length > 1
            ? card?.Text?.map((task, index) => (
                <p key={index}>
                  {index + 1}:{task} <br></br>
                </p>
              ))
            : card?.Text?.map((task, index) => (
                <p key={index}>
                  {task} <br></br>
                </p>
              ))}
        </div>
        <div style={{ textAlign: "end" }}>
        {!inHome && 
          <IconButton
            className="icons"
            onClick={() => {
              setcurrentId(ADD_TASK + card?.id);
              setShowAddCard((prevState) => !prevState);
            }}
          >
            <AddIcon />
          </IconButton>}
        </div>
      </div>
    </Draggable>
  );
};

export default Post;
