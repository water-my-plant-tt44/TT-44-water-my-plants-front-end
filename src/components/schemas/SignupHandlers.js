// React
import { useState, useEffect } from "react";

// Components
import Signup from "../Signup";

// Material-ui
import { makeStyles, Grid } from "@material-ui/core";

// schemas
import * as yup from "yup";
import {SignupSchema} from "./SignupSchema";;

// App styles
const useStyles = makeStyles({
    root: {
      fontFamily: "roboto, sans-serif"
    }
  });
  
  // Sign Up - Form  - init states //
  const initialSignUpFormValues = {
    username: "",
    password: "",
    phoneNumber: ""
  };
  
  const initialSignUpFormErrors = {
    username: "",
    password: "",
    phoneNumber: ""
  };
  
  const initialSignUpDisabled = true;

  const SignupHandlers = () => {

    // styles
    const classes = useStyles();
  
    // SIGN UP STATES //
    // values
    const [signUpFormValues, setSignUpFormValues] = useState(
      initialSignUpFormValues
    );
  
    // errors
    const [signUpFormErrors, setSignUpFormErrors] = useState(
      initialSignUpFormErrors
    );
  
    // init disabled sign-up btn
    const [signUpDisabled, setSignUpDisabled] = useState(initialSignUpDisabled);
  
    // sign up validation
    const inputChangeSignUp = (name, value) => {
      yup
        .reach(SignupSchema, name)
        .validate(value)
        .then(() => {
          setSignUpFormErrors({ ...signUpFormErrors, [name]: "" });
        })
        .catch((err) => {
          setSignUpFormErrors({ ...signUpFormErrors, [name]: err.errors[0] });
        });
      setSignUpFormValues({
        ...signUpFormValues,
        [name]: value
      });
    };
  
    // sign up disabled handler
    useEffect(() => {
      SignupSchema
        .isValid(signUpFormValues)
        .then((valid) => setSignUpDisabled(!valid));
    }, [signUpFormValues]);

    return (
        <Grid container className={classes.root}>
          <Signup
            change={inputChangeSignUp}
            values={signUpFormValues}
            errors={signUpFormErrors}
            disabled={signUpDisabled}
          />
        </Grid>
      );
}

export default SignupHandlers;