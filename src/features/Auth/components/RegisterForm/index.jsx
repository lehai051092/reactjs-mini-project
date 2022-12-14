import React from 'react';
import PropTypes from 'prop-types';
import InputField from "../../../../components/form-controls/InputField";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {Avatar, LinearProgress} from "@material-ui/core";
import {LockOutlined} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PasswordField from "../../../../components/form-controls/PasswordField";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
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
  },
  progress: {
    position: "absolute",
    top: theme.spacing(-3),
    left: 0,
    right: 0,
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
    fullName: yup.string()
      .required('Please enter your full name.')
      .test('should be enter two words', 'Please enter two words.', (value) => {
        return value.trim().split(' ').length >= 2;
      }),
    email: yup.string().required('Please enter your email.').email('Please enter format is email.'),
    password: yup.string().required('Please enter your password.').min(6, 'Please enter your password min 6 characters.'),
    retypePassword: yup.string().required('Please retype your password.').oneOf([yup.ref('password')], 'Retype password not match.'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  const {isSubmitting} = form.formState;

  const handleFormSubmit = async (values) => {
    if (onFormSubmit) {
      await onFormSubmit(values);
    }
  }

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress}/>}
      <Avatar className={classes.avatar}>
        <LockOutlined/>
      </Avatar>
      <Typography className={classes.title} component="h2" variant="h5">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <InputField name="fullName" label="Full Name" form={form}/>
        <InputField name="email" label="Email" form={form}/>
        <PasswordField name="password" label="Password" form={form}/>
        <PasswordField name="retypePassword" label="Retype Password" form={form}/>
        <Button
          disabled={isSubmitting}
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;