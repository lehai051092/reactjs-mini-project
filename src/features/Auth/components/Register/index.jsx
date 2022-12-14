import React from 'react';
import RegisterForm from "../RegisterForm";
import {useDispatch} from "react-redux";
import {register} from "../../userSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import {useSnackbar} from "notistack";
import PropTypes from "prop-types";

Register.propTypes = {
  closeDialog: PropTypes.func,
  toggleSetMode: PropTypes.func,
};

Register.defaultProps = {
  closeDialog: null,
  toggleSetMode: null,
}

function Register(props) {
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar();
  const {closeDialog, toggleSetMode} = props;

  const handleFormSubmit = async (values) => {
    values.username = values.email;

    try {
      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar('Register successfully!!!', {variant: "success"});
    } catch (e) {
      enqueueSnackbar(e.message, {variant: "error"});
    }
  };

  const handleToggleMode = () => {
    if (!toggleSetMode) return;

    toggleSetMode('login');
  }

  return (
    <RegisterForm onFormSubmit={handleFormSubmit} handleFormChange={handleToggleMode}/>
  );
}

export default Register;