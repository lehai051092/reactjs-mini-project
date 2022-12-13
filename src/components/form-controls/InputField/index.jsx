import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import {Controller} from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  form: {},
  name: '',

  label: '',
  disabled: false,
};

function InputField(props) {
  const {form, name, label, disabled} = props;

  return (
    <Controller
      form={form}
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label={label}
          error={invalid}
          helperText={error?.message}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disabled}
        />
      )}
    />
  );
}

export default InputField;