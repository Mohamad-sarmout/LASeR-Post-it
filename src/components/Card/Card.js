import { IconButton } from "@mui/material";
import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TASK, DELETE_POST } from "../../store/action/PostAction";
import moment from "moment/moment";

export default function Card({
  isMobile,
  show,
  free,
  setShowAddCard,
  setcurrentId,
  searchPosts,
  setsearchPosts,
}) {
  const Cards = useSelector((state) =>
    searchPosts
      ? state.filter(
          (post) =>
            post.title.toLowerCase().includes(searchPosts) ||
            post.Text.toLowerCase().includes(searchPosts)
        )
      : state
  );

  const [isDrag, setisDrag] = useState(true);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "50px",
        height: window.innerHeight,
        width: window.innerWidth,
        position: "relative",
        // overflow: "hidden",
        padding: "0px",
        marginLeft: isMobile ? (show ? "70px" : "0px") : "200px",
        marginTop: "70px",
      }}
    >
      {Cards.map((card) => (
        <Draggable
          // cancel="true"
          disabled={free && isDrag ? (isMobile ? false : false) : true}
          axis="both"
          bounds="parent"
          onStart={() => {
            setisDrag(true);
          }}
          onStop={() => {
            setisDrag(false);
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
                <IconButton className="icons">
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton
                  className="icons"
                  onClick={() =>
                    dispatch({ type: DELETE_POST, value: card.id })
                  }
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setcurrentId(card.id);
                    setShowAddCard((prevState) => !prevState);
                  }}
                >
                  <EditIcon />
                </IconButton>
              </div>
            </div>
            <div>
              {card.Text.length > 1
                ? card?.Text?.map((task, index) => (
                    <p>
                      {index + 1}:{task} <br></br>
                    </p>
                  ))
                : card?.Text?.map((task, index) => (
                    <p>
                      {task} <br></br>
                    </p>
                  ))}
            </div>
            <div style={{ textAlign: "end" }}>
              <IconButton
                className="icons"
                onClick={() => {
                  setcurrentId(ADD_TASK + card?.id);
                  setShowAddCard((prevState) => !prevState);
                }}
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
        </Draggable>
      ))}
    </div>
  );
}
