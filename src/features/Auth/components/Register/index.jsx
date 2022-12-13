import React from 'react';
import RegisterForm from "../RegisterForm";

Register.propTypes = {};

function Register(props) {

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <RegisterForm onFormSubmit={handleFormSubmit}/>
    </>
  );
}

export default Register;