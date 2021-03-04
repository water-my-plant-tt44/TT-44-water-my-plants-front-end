import React, { useState } from "react";
import {Paper,Grid,TextField,Typography,Button,IconButton,makeStyles} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import PhoneIcon from "@material-ui/icons/Phone";
import leavesBg from "../images/leaves_bg.jpg";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {userSignUpSubmit} from '../actions/authActions'
import LoginSignupNav from './navs/LoginSignupNav';

const useStyles = makeStyles({
  root: {
    flexFlow: "column wrap",
    alignItems: "center",
    backgroundImage: `url(${leavesBg})`,
    height: "100vh"
  },
  paper: {
    width: "25%",
    marginTop: "4%",
    padding: "1%",
    backgroundColor: "#B3BE9F"
  },
  paperItem: {
    color: "white",
    marginTop: "4%",
    marginBottom: "2%",
    borderColor: "white"
  },
  topText: {
    width: "100%",
    textAlign: "center"
  },
  formGrid: {
    flexFlow: "column wrap",
    alignItems: "center"
  },
  haveAccount: {
    flexFlow: "column wrap",
    alignItems: "center"
  }
});

const initialSignUp = {
    username: "test123",
    phoneNumber: "(000)000-0000",
    password: "00000000",
};

const SignUp = ({ userSignUpSubmit }) => {
  const classes = useStyles();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState(initialSignUp);

  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.username.match(/^\w{5,11}$/g) &&
      values.password.match(/^[.\S]{7,15}$/g) &&
      values.phoneNumber.match(/^[(]{1}[0-9]{3}[)]{1}[0-9]{3}[-]{1}[0-9]{4}$/s)
    ) {
      userSignUpSubmit(values);
      history.push("/login");
    //   console.log(values);
    }
    return;
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Typography
              variant="h3"
              className={`${classes.topText} ${classes.paperItem}`}
            >
              Sign-Up
            </Typography>
            <Typography
              variant="h6"
              className={`${classes.topText} ${classes.paperItem}`}
            >
              New user
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid container className={classes.formGrid}>
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                error={
                  values.username !== "" &&
                  !values.username.match(/^\w{5,11}$/g)
                }
                helperText={
                  values.username !== "" &&
                  !values.username.match(/^\w{5,11}$/g)
                    ? "Required: 5-11 characters, no special characters (except underscore), no spaces"
                    : ""
                }
                type="text"
                label="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <AccountCircle />
                    </IconButton>
                  )
                }}
              />
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                error={
                  values.password !== "" &&
                  !values.password.match(/^[.\S]{7,15}$/g)
                }
                helperText={
                  values.password !== "" &&
                  !values.password.match(/^[.\S]{7,15}$/g)
                    ? "Required: 7-15 characters, special characters allowed, no spaces"
                    : ""
                }
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  )
                }}
              />
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                error={
                  values.phoneNumber !== "" &&
                  !values.phoneNumber.match(
                    /^[(]{1}[0-9]{3}[)]{1}[0-9]{3}[-]{1}[0-9]{4}$/s
                  )
                }
                helperText={
                  values.phoneNumber !== "" &&
                  !values.phoneNumber.match(
                    /^[(]{1}[0-9]{3}[)]{1}[0-9]{3}[-]{1}[0-9]{4}$/s
                  )
                    ? "Required: e.g. (123)456-7890, include parenthesis and hyphen"
                    : ""
                }
                label="Phone Number"
                type="tel"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <PhoneIcon />
                    </IconButton>
                  )
                }}
              />
              <Button
                className={`${classes.paperItem}`}
                size="large"
                variant="contained"
                type="submit"
              >
                Sign-Up
              </Button>
            </Grid>
          </form>
          <Grid container className={classes.haveAccount}>
            <Typography className={`${classes.paperItem}`}>
              Already have an account?
            </Typography>
            <Button
              className={`${classes.paperItem}`}
              size="large"
              variant="outlined"
            >
              Login
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};


const mapStateToProps = (state) => {
    return state;
  };
  
export default connect(mapStateToProps, { userSignUpSubmit })(SignUp);
