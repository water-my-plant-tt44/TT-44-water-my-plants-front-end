// React
import { useState, useEffect } from "react";

// Components
import Login from "../Login";

// Material-ui
import { makeStyles, Grid } from "@material-ui/core";

// schemas
import * as yup from "yup";
import {LoginSchema} from "./LoginSchema";

// App styles
const useStyles = makeStyles({
  root: {
    fontFamily: "roboto, sans-serif"
  }
});

// Login - Form - init states //
const initialLoginFormValues = {
  username: "",
  password: ""
};

const initialLoginFormErrors = {
  username: "",
  password: ""
};

const initialLoginDisabled = true;

const LoginHandlers = () => {
  // styles
  const classes = useStyles();

  // LOGIN STATES //
  // values
  const [loginFormValues, setLoginFormValues] = useState(
    initialLoginFormValues
  );

  // errors
  const [loginFormErrors, setLoginFormErrors] = useState(
    initialLoginFormErrors
  );

  // init disabled login btn
  const [loginDisabled, setLoginDisabled] = useState(initialLoginDisabled);

  // login validation
  const inputChangeLogin = (name, value) => {
    yup
      .reach(LoginSchema, name)
      .validate(value)
      .then(() => {
        setLoginFormErrors({ ...loginFormErrors, [name]: "" });
      })
      .catch((err) => {
        setLoginFormErrors({ ...loginFormErrors, [name]: err.errors[0] });
      });
    setLoginFormValues({ ...loginFormValues, [name]: value });
  };

  // login disabled handler
  useEffect(() => {
    LoginSchema
      .isValid(loginFormValues)
      .then((valid) => setLoginDisabled(!valid));
  }, [loginFormValues]);

  return (
    <Grid container className={classes.root}>
      <Login
        change={inputChangeLogin}
        values={loginFormValues}
        errors={loginFormErrors}
        disabled={loginDisabled}
      />
    </Grid>
  );
}

export default LoginHandlers;