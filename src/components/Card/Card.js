import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import "./Card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TASK, DELETE_POST } from "../../store/action/PostAction";
import moment from "moment/moment";
import { useLocation } from "react-router";

export default function Card({
  isMobile,
  show,
  free,
  setShowAddCard,
  setcurrentId,
  searchPosts,
  setsearchPosts,
}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSearch = queryParams.get("search");
  useEffect(() => {
    setsearchPosts(isSearch);
  }, [isSearch]);
  console.log(isSearch);
  const Cards = useSelector((state) =>
    searchPosts
      ? state.post.filter(
          (post) =>
            post.title.toLowerCase().includes(searchPosts) ||
            post.Text.some((text) => text.toLowerCase().includes(searchPosts))
        )
      : state.post
  );
  console.log(Cards);

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
        marginTop: "140px",
      }}
    >
      {Cards.map((card, index) => (
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
                  className="icons"
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
