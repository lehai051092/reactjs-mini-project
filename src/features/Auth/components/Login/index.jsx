import React from 'react';
import {useDispatch} from "react-redux";
import {login} from "../../userSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import {useSnackbar} from "notistack";
import PropTypes from "prop-types";
import LoginForm from "../LoginForm";

Login.propTypes = {
  closeDialog: PropTypes.func,
  toggleSetMode: PropTypes.func,
};

Login.defaultProps = {
  closeDialog: null,
  toggleSetMode: null,
}

function Login(props) {
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar();
  const {closeDialog, toggleSetMode} = props;

  const handleFormSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      if (closeDialog) {
        closeDialog();
      }
    } catch (e) {
      enqueueSnackbar(e.message, {variant: "error"});
    }
  };

  const handleToggleMode = () => {
    if (!toggleSetMode) return;

    toggleSetMode('register');
  }

  return (
    <LoginForm onFormSubmit={handleFormSubmit} handleFormChange={handleToggleMode}/>
  );
}

export default Login;