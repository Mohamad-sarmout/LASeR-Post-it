import { IconButton } from "@mui/material";
import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_POST } from "../../store/action/PostAction";
import moment from "moment/moment";

export default function Card({isMobile,show,free,setShowAddCard,setcurrentId,searchPosts,setsearchPosts})
 {
  const Cards = useSelector((state) =>
  searchPosts ? state.filter((post) => post.title.toLowerCase().includes(searchPosts) || post.Text.toLowerCase().includes(searchPosts)): state);

  
  const [isDrag, setisDrag] = useState(true);
  const dispatch = useDispatch();
  console.log(Cards);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "50px",
        height: "100vh",
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
          cancel="true"
          disabled={free && isDrag ? (isMobile ? false : false) : true}
          axis="both"
          bounds="parent"
          onStart={() => {
            setisDrag(true);
            console.log("start");
          }}
          onStop={() => {
            setisDrag(false);
            console.log("end");
            console.log(isDrag);
          }}
          onDrag={() => console.log("drag")}
          onMouseDown={() => {
            setisDrag(true);
            console.log("down");
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
              maxHeight: "250px",
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
              </div>
            </div>
            <p>{card.Text}</p>
            <div style={{ textAlign: "end" }}>
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
        </Draggable>
      ))}
    </div>
  );
}