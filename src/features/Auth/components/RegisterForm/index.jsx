import React from 'react';
import PropTypes from 'prop-types';
import InputField from "../../../../components/form-controls/InputField";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {Avatar} from "@material-ui/core";
import {LockOutlined} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
  },
  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    textAlign: "center",
    margin: theme.spacing(2, 0, 3, 0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  }
}));

RegisterForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
  onFormSubmit: null,
};

function RegisterForm({onFormSubmit}) {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined/>
      </Avatar>
      <Typography className={classes.title} component="h2" variant="h5">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <InputField name="fullName" label="Full Name" form={form}/>
        <InputField name="email" label="Email" form={form}/>
        <InputField name="password" label="Password" form={form}/>
        <InputField name="retypePassword" label="Retype Password" form={form}/>
        <Button className={classes.submit} variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;