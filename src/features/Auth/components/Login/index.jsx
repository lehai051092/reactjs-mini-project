import React from 'react';
import {useDispatch} from "react-redux";
import {login} from "../../userSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import {useSnackbar} from "notistack";
import PropTypes from "prop-types";
import LoginForm from "../LoginForm";

Login.propTypes = {
  closeDialog: PropTypes.func,
};

Login.defaultProps = {
  closeDialog: null,
}

function Login(props) {
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar();
  const {closeDialog} = props;

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

  return (
    <>
      <LoginForm onFormSubmit={handleFormSubmit}/>
    </>
  );
}

export default Login;