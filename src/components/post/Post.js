import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TASK, DELETE_POST } from "../../store/action/PostAction";
import moment from "moment/moment";
import { useLocation } from "react-router";

function Post({card,isMobile,setcurrentId,setShowAddCard}) {
      //icon favorite
  const [isActive, setisActive] = useState(false);

  const handleFavorite = () => {
      setisActive(true)
  }
  const dispatch = useDispatch();
  return (
        <>
                <div className="row">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>{card.title}</h3>
                <h6>{moment(card?.date).fromNow()}</h6>
              </div>
              <div>
                <IconButton className="icons" onClick={handleFavorite}>
                  { isActive? <FavoriteIcon/> : <FavoriteBorderIcon/>}
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
          
        </>
  )
}

export default Post