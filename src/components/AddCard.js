import  React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { AddCard } from "@mui/icons-material";
import { ADD_POST, UPDATE_POST } from "../store/action/PostAction";

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

export default function KeepMountedModal({ showAddCard, setShowAddCard ,currentId,setcurrentId}) {
  const [addCard, setaddCard] = useState({id:"",title:"",Text:"",date:"",color:"",stylefont:""})
  const dispatch = useDispatch();
  const currentPost=useSelector(state=> currentId ? state.find(post=>post.id===currentId) : null)
  console.log(currentPost);
  const handleChange = (event) => {
    setaddCard({...addCard,[event.target.name]:event.target.value})
    console.log(addCard);
  }
  useEffect(() => {
if(currentId){
  setaddCard(currentPost)
  console.log(addCard);

console.log(addCard);
}}, [currentId])
  const handleSubmit=()=>{
    if(currentId){
      setShowAddCard((prev) => !prev);
      dispatch({type:UPDATE_POST,value:addCard});      
    }
    else{
    setShowAddCard((prev) => !prev);
    dispatch({type:ADD_POST,value:{...addCard,id:Math.random()}});
  }
  clear()
}
const clear =()=>{
  setcurrentId(0)
  setaddCard({id:"",title:"",Text:"",date:"",color:"",stylefont:""})
}
  return (
    <div>
      {
        <Modal
          keepMounted
          open={showAddCard}
          onClose={() =>{ setShowAddCard((prev) => !prev);
          clear()}}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <h1>Add Post</h1>
            <IconButton
              aria-label="close"
              onClick={() =>{ setShowAddCard((prev) => !prev);
              clear()}}
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
            /><br /><br />
            <input
              type="date"
              name="date"
              onChange={handleChange}
              value={addCard?.date}
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
              name="Text"
              onChange={handleChange}
              value={addCard?.Text}
              rows={4}
              fullWidth
              variant="standard"
            /><br /><br />
            <div style={{ display: "flex", marginTop: "10px" }}>
              <label>Color:&nbsp;</label>
              <input
               name="color"
               onChange={handleChange}
               value={addCard?.color}
                type="color"
                // defaultValue="#ff0000"
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
                name="stylefont"
                onChange={handleChange}
                value={addCard?.stylefont}
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
                onClick={handleSubmit}
                sx={{ width: "50px" }}
              >
             {currentId ? "EDIT" : "SAVE"}
              </Button>
            </div>
          </Box>
        </Modal>
      }
    </div>
  );
}
