import { Divider, Grid, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import "./Card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_POST } from "../../store/action/PostAction";

export default function Card({
  isMobile,
  show,
  free,
  setShowAddCard,
  setcurrentId,
}) {
  const Cards = useSelector((state) => state);
  const [isDrag, setisDrag] = useState(true);
  const dispatch = useDispatch();
  console.log(Cards);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "50px",
        height: "250vh",
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
              maxWidth: isMobile ? "280px" : "500px",
              maxHeight: "500px",
              backgroundColor: card?.color,
              fontFamily: card.stylefont,
            }}
          >
            <div className="row">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>{card.title}</h3>
                <h6>{card.date}</h6>
              </div>
              <div>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton
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
