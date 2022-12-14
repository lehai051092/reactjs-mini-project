import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Register from "../../../../features/Auth/components/Register";
import IconButton from "@material-ui/core/IconButton";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import Login from "../../../../features/Auth/components/Login";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: 0,
    color: theme.palette.grey["500"],
  },
}));

DialogUser.propTypes = {};

function DialogUser(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="inherit" onClick={handleClickOpen}>Login</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" disableEscapeKeyDown>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close/>
        </IconButton>
        <DialogContent>
          <Login closeDialog={handleClose}/>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DialogUser;