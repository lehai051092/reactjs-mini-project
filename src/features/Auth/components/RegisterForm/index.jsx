import React from 'react';
import PropTypes from 'prop-types';
import InputField from "../../../../components/form-controls/InputField";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {Avatar} from "@material-ui/core";
import {LockOutlined} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

RegisterForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
  onFormSubmit: null,
};

function RegisterForm({onFormSubmit}) {
  const schema = yup.object({
    title: yup.string()
      .required('Please enter title')
      .min(6, 'Title is too short'),
  }).required();

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (values) => {
    if (onFormSubmit) {
      onFormSubmit(values);
    }

    form.reset();
  }

  return (
    <>
      <Avatar>
        <LockOutlined/>
      </Avatar>
      <Typography component="h2" variant="h5">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <InputField name="fullName" label="Full Name" form={form}/>
        <InputField name="email" label="Email" form={form}/>
        <InputField name="password" label="Password" form={form}/>
        <InputField name="retypePassword" label="Retype Password" form={form}/>
      </form>
    </>
  );
}

export default RegisterForm;