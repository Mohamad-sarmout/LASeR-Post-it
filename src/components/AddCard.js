import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width: '400px'
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            // color: (theme) => theme.palette.error.dark,
            color:"red"
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Post
        </BootstrapDialogTitle>
        <DialogContent dividers>
         <TextField sx={{backgroundColor: '#f0f8ff'}}
          id="filled-multiline-flexible"
          label="Title"
          multiline
          maxRows={4}
          variant="standard"
          width="100%"
          fullWidth
        /> <br/><br/>
         <input type ="date" style={{width:"98%",height:"50px",backgroundColor:"#f0f8ff",border:"none"}}/><br/><br/>
          <TextField sx={{backgroundColor: '#f0f8ff'}}
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={4}
          fullWidth  
          variant="standard"
        />
        <div style={{display:"flex",marginTop:"10px"}}>
        <label>Color:&nbsp;</label><input type="color"  defaultValue="#ff0000" style={{width:"100%"}}/>
        </div><br/>
         <div style={{textAlign:"center"}}>
          <Button variant='contained' autoFocus onClick={handleClose} sx={{width:'50px'}}>
            Save
          </Button>
          </div>
          </DialogContent>
      </BootstrapDialog>
    </div>
  );
}