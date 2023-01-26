import React, { useEffect } from "react";
import "./Card.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import Post from "./post/Post";
export default function Card({
  isMobile,
  show,
  free,
  setShowAddCard,
  setcurrentId,
  searchPosts,
  setsearchPosts,
  reducer,
}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSearch = queryParams.get("search");
  useEffect(() => {
    setsearchPosts(isSearch);
  }, [isSearch]);
  console.log(isSearch);
  let Cards = [];
  const state = useSelector((state) =>
    reducer === "Favorite"
      ? state.favorite
      : reducer === "Trash"
      ? state.trash
      : state.post
  );
  Cards = searchPosts
    ? state.filter(
        (post) =>
          post.title.toLowerCase().includes(searchPosts) ||
          post.Text.some((text) => text.toLowerCase().includes(searchPosts))
      )
    : state;

  console.log(Cards);
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
      {Cards?.map((card, index) => (
        <Post
          key={index}
          index={index}
          card={card}
          setShowAddCard={setShowAddCard}
          setcurrentId={setcurrentId}
          free={free}
        />
      ))}
    </div>
  );
}
