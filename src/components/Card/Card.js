import { Divider, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_POST } from "../../store/action/PostAction";


export default function Card({ isMobile, show, free, setShowAddCard,setcurrentId }) {
   const Cards = useSelector(state => state);
   const dispatch = useDispatch()

  const drag = Cards?.map((card) => (
    <Draggable>
      <Grid item xs={12} md={6} lg={4}>
        <div
          className="Card"
          key={card}
          style={{ height: "auto", width: "auto", padding: "10px",backgroundColor:card?.color,fontFamily:card.stylefont}}
        >
          <div className="row">
            <h3>
              {card?.title}
              <h6>
                <h6>{card?.date}</h6>
              </h6>
            </h3>
            <div>
              <IconButton className="icons">
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton className="icons" onClick={()=>dispatch({type:DELETE_POST,value:card.id})}>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
          <p>{card?.Text}</p>

          <div style={{ textAlign: "end" }}>
            <IconButton onClick={()=> {setcurrentId(card.id)
              setShowAddCard(prevState => !prevState);}}
              className="icons" >
              <EditIcon/>
            </IconButton>
          </div>
        </div>
      </Grid>
    </Draggable>
  ));
  const notDrag = Cards.map((card) => (
    <Grid item xs={12} md={6} lg={4}>
      <div
        className="Card"
        key={card}
        style={{ height: "auto", width: "auto", padding: "10px" }}
      >
        <div className="row">
          <h3>
            {card?.title}
            <h6>
              <h6>{card?.date}</h6>
            </h6>
          </h3>
          <div>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
        <p>{card?.Text}</p>

        <div style={{ textAlign: "end" }}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </div>
      </div>
    </Grid>
  ));
  return (
    <div
      style={{
        height: window.innerHeight,
        width: window.innerWidth,
        position: "relative",
        overflow: "hidden",
        padding: "0",
        marginLeft: isMobile ? (show ? "70px" : "0px") : "220px",
        marginTop: "70px",
      }}
    >
      <div>
        <main style={{ width: "100%", height: "100%" }}>
          <h1>Post it</h1>
          <Grid container>
            {/* {free ? drag : notDrag} */}
            {drag}
          </Grid>

          {/* </Container> */}
        </main>
      </div>
    </div>
  );
}
