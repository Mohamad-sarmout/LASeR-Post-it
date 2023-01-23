import { Divider, Grid, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import "./Card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const initState = [
  {
    id: 1,
    date: "15/1/2000",
    title: "To-do",
    Text: "1.clean my github 2.create my site web 3.update my resume",
  },
  {
    id: 2,
    date: "15/1/2000",
    title: "Lession",
    Text: " commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    date: "15/1/2000",
    title: "What is Vue?",
    Text: "Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition.",
  },
  {
    id: 4,
    date: "15/1/2000",
    title: "Card-4",
    Text: " dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    id: 5,
    date: "15/1/2000",
    title: "Card-5",
    Text: "Lorem ipsum dolor sit amet, cunt ut labore et dolaliquip ex ea",
  },
  {
    id: 1,
    date: "15/1/2000",
    title: "To-do",
    Text: "1.clean my github 2.create my site web 3.update my resume",
  },
  {
    id: 2,
    date: "15/1/2000",
    title: "Lession",
    Text: " commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    date: "15/1/2000",
    title: "What is Vue?",
    Text: "Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition.",
  },
  {
    id: 4,
    date: "15/1/2000",
    title: "Card-4",
    Text: " dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    id: 5,
    date: "15/1/2000",
    title: "Card-5",
    Text: "Lorem ipsum dolor sit amet, cunt ut labore et dolaliquip ex ea",
  },
  {
    id: 1,
    date: "15/1/2000",
    title: "To-do",
    Text: "1.clean my github 2.create my site web 3.update my resume",
  },
  {
    id: 2,
    date: "15/1/2000",
    title: "Lession",
    Text: " commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    date: "15/1/2000",
    title: "What is Vue?",
    Text: "Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition.",
  },
  {
    id: 4,
    date: "15/1/2000",
    title: "Card-4",
    Text: " dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    id: 5,
    date: "15/1/2000",
    title: "Card-5",
    Text: "Lorem ipsum dolor sit amet, cunt ut labore et dolaliquip ex ea",
  },
  {
    id: 1,
    date: "15/1/2000",
    title: "To-do",
    Text: "1.clean my github 2.create my site web 3.update my resume",
  },
  {
    id: 2,
    date: "15/1/2000",
    title: "Lession",
    Text: " commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    date: "15/1/2000",
    title: "What is Vue?",
    Text: "Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition.",
  },
  {
    id: 4,
    date: "15/1/2000",
    title: "Card-4",
    Text: " dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    id: 5,
    date: "15/1/2000",
    title: "Card-5",
    Text: "Lorem ipsum dolor sit amet, cunt ut labore et dolaliquip ex ea",
  },
];
export default function Card({ isMobile, show, free }) {
  const [isDrag, setisDrag] = useState(true);
  const nodeRef = useRef(null);
  const [Cards] = useState(initState);
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
        </Draggable>
      ))}
    </div>
  );
}
