import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Controller} from "react-hook-form";
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

PasswordField.defaultProps = {
  form: {},
  name: '',

  label: '',
  disabled: false,
};

function PasswordField(props) {
  const {form, name, label, disabled} = props;
  const [showPassword, setShowPassword] = useState(false);
  const {formState:{errors}} = form;
  const hasError = !!errors[name];

  const handleClickShowPassword = () => {
    setShowPassword(x => !x);
  }

  return (
    <FormControl error={hasError} fullWidth margin="normal" variant="outlined">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        form={form}
        name={name}
        control={form.control}
        render={({field: {onChange, onBlur, value, name}, fieldState: {invalid, error}}) => (
          <OutlinedInput
            id={name}
            label={label}
            error={invalid}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={value}
            disabled={disabled}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility/> : <VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            }
          />
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default PasswordField;