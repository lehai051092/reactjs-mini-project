import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Register from "../../../../features/Auth/components/Register";

DialogRegister.propTypes = {};

function DialogRegister(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="inherit" onClick={handleClickOpen}>Register</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" disableEscapeKeyDown disableBackdropClick>
        <DialogContent>
          <Register/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DialogRegister;