import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TASK } from "../store/constants/PostAction";
import {
  createpost,
  updatedpost,
  updatedPostsubtask,
} from "../actions/PostActions";

export default function KeepMountedModal({
  showAddCard,
  setShowAddCard,
  currentId,
  setcurrentId,
  isMobile
}) {
  
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: isMobile ? 300 : 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};
  const user = JSON.parse(localStorage.getItem("profile"));
  const [addCard, setaddCard] = useState({
    id: "",
    title: "",
    Text: "",
    color: "",
    fontColor: "",
    stylefont: "",
    date: "",
  });
  const dispatch = useDispatch();
  const currentPost = useSelector((state) =>
    currentId || currentId.toString().includes(ADD_TASK)
      ? state.post.find(
          (post) =>
            post.id === currentId ||
            post.id === parseInt(currentId?.toString().split("K")[1])
        )
      : null
  );
  const handleChange = (event) => {
    event.target.name !== "Text"
      ? setaddCard({ ...addCard, [event.target.name]: event.target.value })
      : setaddCard({
          ...addCard,
          [event.target.name]: event.target.value,
        });
  };
  useEffect(() => {
    if (currentId && !currentId?.toString().includes(ADD_TASK)) {
      setaddCard(currentPost);
    }
  }, [currentId]);

  const handleSubmit = async () => {
    if (currentId && !currentId?.toString().includes(ADD_TASK)) {
      setShowAddCard((prev) => !prev);
      dispatch(
        updatedpost({
          ...addCard,
        })
      );
    } else if (currentId?.toString().includes(ADD_TASK)) {
      setShowAddCard((prev) => !prev);
      console.log(currentPost);
      const PostSubTasksToBeUpdated = {
        ...currentPost,
        Text: currentPost.Text.concat(`,${addCard.title}`),
      };
      dispatch(updatedPostsubtask(PostSubTasksToBeUpdated));
    } else {
      setShowAddCard((prev) => !prev);
      dispatch(
        createpost({
          ...addCard,
          date: new Date(),
          user_id: user.id,
          favorite: false,
          trash: false,
        })
      );
    }
    clear();
  };
  const clear = () => {
    setcurrentId("");
    setaddCard({
      id: "",
      title: "",
      Text: [],
      color: "",
      stylefont: "",
      date: "",
    });
  };
  return (
    <div>
      {
        <Modal
          keepMounted
          open={showAddCard}
          onClose={() => {
            setShowAddCard((prev) => !prev);
            clear();
          }}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <h1>
              {currentId
                ? currentId?.toString().includes(ADD_TASK)
                  ? "Add Task"
                  : "Edit Post"
                : "Add Post"}
            </h1>
            <IconButton
              aria-label="close"
              onClick={() => {
                setShowAddCard((prev) => !prev);
                clear();
              }}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "red",
              }}
            >
              <CloseIcon />
            </IconButton>
            <TextField
              // spread on state
              onChange={handleChange}
              sx={{ backgroundColor: "#f0f8ff" }}
              id="filled-multiline-flexible"
              label="title"
              name="title"
              value={addCard?.title}
              multiline
              maxRows={4}
              variant="standard"
              width="100%"
              fullWidth
              autoFocus
            />
            <br />
            <br />
            {(!currentId || !currentId?.toString().includes(ADD_TASK)) && (
              <>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <label>fontColor:&nbsp;</label>
                  <input
                    name="fontColor"
                    onChange={handleChange}
                    value={addCard?.fontColor}
                    type="color"
                    // defaultValue="#ff0000"
                    style={{ width: "100%" }}
                  />
                </div>
                <br />
                <br />
                <TextField
                  sx={{ backgroundColor: "#f0f8ff" }}
                  id="filled-multiline-static"
                  label="Description"
                  multiline
                  name="Text"
                  onChange={handleChange}
                  value={addCard?.Text}
                  rows={4}
                  fullWidth
                  variant="standard"
                />
                <br />
                <br />
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <label>backgroundColor:&nbsp;</label>
                  <input
                    name="color"
                    onChange={handleChange}
                    value={addCard?.color}
                    type="color"
                    // defaultValue="#ff0000"
                    style={{ width: "100%" }}
                  />
                </div>
                <br />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label>Fonts:</label>&nbsp;
                  <select
                    style={{
                      backgroundColor: "#f0f8ff",
                      width: "100%",
                      height: "40px",
                    }}
                    name="stylefont"
                    onChange={handleChange}
                    value={addCard?.stylefont}
                  >
                    <option value="Roboto">Roboto</option>
                    <option value="Open Sans">Open Sans</option>
                    <option value="Ubuntu">Ubuntu</option>
                  </select>
                </div>
                <br />{" "}
              </>
            )}
            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                autoFocus
                onClick={handleSubmit}
                sx={{ width: "50px" }}
              >
                {currentId
                  ? currentId?.toString().includes(ADD_TASK)
                    ? "Add"
                    : "Edit"
                  : "Add"}
              </Button>
            </div>
          </Box>
        </Modal>
      }
    </div>
  );
}
