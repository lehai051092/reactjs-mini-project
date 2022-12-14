import React from 'react';
import RegisterForm from "../RegisterForm";
import {useDispatch} from "react-redux";
import {register} from "../../userSlice";
import {unwrapResult} from "@reduxjs/toolkit";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const handleFormSubmit = async (values) => {
    values.username = values.email;

    try {
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      console.log('Register user success:', user);
    } catch (e) {
      console.log('Register user fail:', e);
    }
  };

  return (
    <>
      <RegisterForm onFormSubmit={handleFormSubmit}/>
    </>
  );
}

export default Register;