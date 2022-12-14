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

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

DialogUser.propTypes = {};

function DialogUser(props) {
  const [open, setOpen] = React.useState(false);
  const [getMode, setMode] = React.useState(MODE.LOGIN);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetMode = (mode) => {
    setMode(mode);
  };

  return (
    <>
      <Button color="inherit" onClick={handleClickOpen}>Login</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" disableEscapeKeyDown>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close/>
        </IconButton>
        <DialogContent>
          {getMode === MODE.REGISTER && (
            <Register closeDialog={handleClose} toggleSetMode={handleSetMode}/>
          )}
          {getMode === MODE.LOGIN && (
            <Login closeDialog={handleClose} toggleSetMode={handleSetMode}/>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DialogUser;