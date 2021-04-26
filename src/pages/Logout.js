/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton, Box } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';

const LogOut = ({ title, buttonClass, iconClass }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setOpen(false);
    window.location.reload();
  };

  return (
    <div>
      <IconButton
        color="inherit"
        title="Logout"
        onClick={handleClickOpen}
        style={buttonClass}
      >
        <InputIcon style={iconClass} />
        <Box>{title || ''}</Box>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Sure you want to logout?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleLogout} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogOut;
