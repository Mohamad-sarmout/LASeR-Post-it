import { Divider, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Card() {
  const [Cards] = useState([
    {
      id: 1,
      date:"15/1/2000",
      title: "To-do",
      Text: "1.clean my github 2.create my site web 3.update my resume",
    },
    {
      id: 2,
      date:"15/1/2000",
      title: "Lession",
      Text: " commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      date:"15/1/2000",
      title: "What is Vue?",
      Text: "Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition.",
    },
    {
      id: 4,
      date:"15/1/2000",
      title: "Card-4",
      Text: " dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
      id: 5,
      date:"15/1/2000",
      title: "Card-5",
      Text: "Lorem ipsum dolor sit amet, cunt ut labore et dolaliquip ex ea",
    },
  ]);
  return (
    <div
      style={{
        height: window.innerHeight,
        width: window.innerWidth,
        position: "relative",
        overflow: "hidden",
        padding: "0",
      }}
    >
      <div>
        <main style={{ width: "100%", height: "100%" }}>
          <h1>Post it</h1>
          <Grid container>
            {Cards.map((card) => (
              <Draggable>
                <Grid item xs={12} md={6} lg={4}>
                  <div
                    className="Card"
                    key={card}
                    style={{ height: "auto", width: "auto", padding: "10px" }}
                  >
                    <div className="row">
                      <h3>{card.title}<h6><h6>{card.date}</h6></h6></h3>
                      <div>
                        <IconButton onClick={()=>{console.log("hello")}}>
                          <FavoriteBorderIcon/>
                        </IconButton>
                        <IconButton>
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </div>
                    <p>{card.Text}</p>
                    
                    <div style={{ textAlign: "end" }}>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </div>
                  </div>
                </Grid>
              </Draggable>
            ))}
          </Grid>

          {/* </Container> */}
        </main>
      </div>
    </div>
  );
}
