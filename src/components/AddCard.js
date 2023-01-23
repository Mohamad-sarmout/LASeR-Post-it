import  React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { AddCard } from "@mui/icons-material";
import { ADD_POST } from "../store/action/PostAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function KeepMountedModal({ showAddCard, setShowAddCard }) {
  const [addCard, setaddCard] = useState({id:1,title:"assssaas",Text:"",date:"",color:"",stylefont:""})
  const dispatch = useDispatch();
  return (
    <div>
      {
        <Modal
          keepMounted
          open={showAddCard}
          onClose={() => setShowAddCard((prev) => !prev)}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <h1>Add Post</h1>
            <IconButton
              aria-label="close"
              onClick={() => setShowAddCard((prev) => !prev)}
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
             onChange={(e)=> console.log(addCard)}
              sx={{ backgroundColor: "#f0f8ff" }}
              id="filled-multiline-flexible"
              label="title"
              multiline
              maxRows={4}
              variant="standard"
              width="100%"
              fullWidth
            /><br /><br />
            <input
              type="date"
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "#f0f8ff",
                border: "none",
              }}
            /><br /><br />
            <TextField
              sx={{ backgroundColor: "#f0f8ff" }}
              id="filled-multiline-static"
              label="Description"
              multiline
              rows={4}
              fullWidth
              variant="standard"
            /><br /><br />
            <div style={{ display: "flex", marginTop: "10px" }}>
              <label>Color:&nbsp;</label>
              <input
                type="color"
                defaultValue="#ff0000"
                style={{ width: "100%" }}
              />
            </div><br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <label>Fonts:</label>&nbsp;
              <select
                style={{
                  backgroundColor: "#f0f8ff",
                  width: "100%",
                  height: "40px",
                }}
              >
                <option>Roboto</option>
                <option>Open Sans</option>
                <option>Ubuntu</option>
              </select>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                autoFocus
                onClick={() => {
                  setShowAddCard((prev) => !prev);
                  dispatch({type:ADD_POST,value:AddCard});
                  }}
                sx={{ width: "50px" }}
              >
                Save
              </Button>
            </div>
          </Box>
        </Modal>
      }
    </div>
  );
}
