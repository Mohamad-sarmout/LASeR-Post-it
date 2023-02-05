import { IconButton } from "@mui/material";
import React, { useState } from "react";
import Draggable from "react-draggable";
import "../Card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useDispatch } from "react-redux";
import moment from "moment/moment";
import { ADD_TASK } from "../../../store/constants/PostAction";
import { useLocation } from "react-router";
import RestoreIcon from "@mui/icons-material/Restore";
import { updatedpost } from "../../../actions/PostActions";
import {
  deleteFavPost,
  favpost,
  unfavpost,
} from "../../../actions/FavoriteActions";
import {
  deletepermenantlypost,
  deletepost,
  restorepost,
} from "../../../actions/TrashActions";

const Post = ({
  isMobile,
  setcurrentId,
  setShowAddCard,
  card,
  index,
  free,
  isPressedForCopy,
  setisPressedForCopy,
}) => {
  const dispatch = useDispatch();
  const [isDrag, setisDrag] = useState(true);
  const [isActive, setisActive] = useState(card.favorite);
  const location = useLocation();
  const inHome = location.pathname.split("/")[2]?.toLocaleLowerCase();
  const handleFav = (card) => {
    if (inHome === "favorite") {
      setisActive(false);
      dispatch(unfavpost(card));
    } else if (!inHome)
      if (isActive) {
        setisActive(false);
        dispatch(unfavpost(card));
      } else {
        setisActive(true);
        dispatch(favpost(card));
      }
  };
  const handleTrash = (card) => {
    if (inHome === "favorite") {
      dispatch(deleteFavPost(card));
    } else if (inHome === "trash") {
      dispatch(deletepermenantlypost(card.id));
    } else {
      dispatch(deletepost({ ...card, favorite: false, trash: true }));
    }
  };
  const handleRestore = (card) => {
    dispatch(restorepost({ ...card, trash: false }));
  };
  const handleCopyDesign = (id) => {
    const { fontColor, color, stylefont } = isPressedForCopy;
    dispatch(updatedpost({ ...card, fontColor, color, stylefont }));
    setisPressedForCopy({ value: false });
  };
  let keysPressed = {};
  return (
    <Draggable
      key={index}
      handle=".handle"
      disabled={free && isDrag ? (isMobile ? false : false) : true}
      axis="both"
      bounds="parent"
      onStart={() => {
        setisDrag(true);
      }}
      onStop={() => {
        // setisDrag(false);
      }}
      onDrag={() => console.log(isDrag)}
      onMouseDown={() => {
        setisDrag(true);
      }}
    >
      <div
        role="button"
        tabIndex="0"
        onClick={() => {
          setisDrag(true);
        }}
        onDoubleClick={() =>
          isPressedForCopy.value && handleCopyDesign(card.id)
        }
        onKeyDown={(event) => {
          keysPressed[event.key] = true;
          if (keysPressed["Control"] && event.key === "c") {
            isPressedForCopy.value = true;
            setisPressedForCopy({ value: true, ...card });
          }
          if (keysPressed["Control"] && event.key === "v") {
            isPressedForCopy.value && handleCopyDesign(card.id);
            isPressedForCopy.value = false;
          }
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
        <div className="handle" />
        <div className="row">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>{card.title}</h3>
            <h6>{moment(card?.date).fromNow()}</h6>
          </div>
          <div>
            {inHome !== "trash" && (
              <IconButton
                className="icons"
                onClick={handleFav.bind(null, card)}
              >
                {isActive ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            )}
            {inHome === "trash" && (
              <IconButton
                onClick={handleRestore.bind(null, card)}
                className="icons"
              >
                <RestoreIcon />
              </IconButton>
            )}
            <IconButton
              className="icons"
              onClick={handleTrash.bind(null, card)}
            >
              <DeleteIcon />
            </IconButton>
            {!inHome && (
              <IconButton
                className="icons"
                onClick={() => {
                  setcurrentId(card.id);
                  setShowAddCard((prevState) => !prevState);
                }}
              >
                <EditIcon />
              </IconButton>
            )}
            <IconButton
              onClick={() => setisPressedForCopy({ value: true, ...card })}
            >
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div>
          {card?.Text?.split(",")?.length > 1
            ? card?.Text?.split(",")?.map((task, index) => (
                <ul key={index}>
                  <li>
                    {index + 1}:{task}
                  </li>
                </ul>
              ))
            : card?.Text?.split(",")?.map((task, index) => (
                <ul key={index}>
                  <li> {task} </li>
                </ul>
              ))}
        </div>
        <div style={{ textAlign: "end" }}>
          {!inHome && (
            <IconButton
              className="icons"
              onClick={() => {
                console.log(card?.id);
                setcurrentId(ADD_TASK + card?.id);
                setShowAddCard((prevState) => !prevState);
              }}
            >
              <AddIcon />
            </IconButton>
          )}
        </div>
      </div>
    </Draggable>
  );
};

export default Post;
