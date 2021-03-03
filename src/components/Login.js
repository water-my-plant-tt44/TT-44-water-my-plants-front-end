// React
import React, { useState } from "react";
import LoginSignupNav from './navs/LoginSignupNav';

// material ui
import {
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  makeStyles
} from "@material-ui/core";

// material ui icons
import { Visibility, VisibilityOff, AccountCircle } from "@material-ui/icons";


const useStyles = makeStyles({
  root: {
    width: "100%",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: 'url("https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")',
    height: '90vh'
  },
  title: {
    marginTop: "2%",
    marginBottom: "2%"
  },
  form: {
    width: "30%",
    padding: "2%"
  },
  card: {
    flexFlow: "column wrap",
    alignItems: "center",
    backgroundColor: "#B3BE9F",
    padding: "2%",
    borderRadius: "10px"
  },
  inputGrid: {
    width: "100%",
    marginBottom: "3%",
    marginTop: "3%"
  },
  loginButton: {
    marginTop: "2%",
    marginBottom: "2%"
  },
  newUserWrapper: {
    width: "100%",
    flexFlow: "column wrap",
    alignItems: "center"
  },
  newUserContainer: {
    paddingTop: "1%",
    flexFlow: "column wrap",
    alignItems: "center"
  },
  newUserItem: {
    marginTop: "1%",
    marginBottom: "1%"
  },
  signUpButton: {
    borderColor: "white",
    color: "white"
  }
});

const initialShowPassword = false;

const Login = (props) => {
  // const { change, values, errors, disabled } = props;

  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(initialShowPassword);

  // const handleChange = (evt) => {
  //   const { name, value } = evt.target;
  //   change(name, value);
  // };

  return (
    <>
    <LoginSignupNav />
      {/* root container */}
      <Grid container className={classes.root}>
        {/* form container */}
        <form className={classes.form}>
          {/* form items-container */}
          <Grid container className={classes.card}>
            <Grid item className={classes.title}>
              <Typography variant="h2">Login</Typography>
            </Grid>
            <Grid item className={classes.inputGrid}>
              <TextField
                fullWidth
                required
                autoComplete="off"
                label="Username"
                name="username"
                variant="filled"
                type="text"
                // value={values.username}
                // onChange={handleChange}
                // error={errors.username !== "" ? true : false}
                // helperText={errors.username}
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <AccountCircle />
                    </IconButton>
                  )
                }}
              />
            </Grid>
            <Grid item className={classes.inputGrid}>
              <TextField
                fullWidth
                required
                autoComplete="off"
                type={showPassword ? "text" : "password"}
                name="password"
                label="Password"
                variant="filled"
                // value={values.password}
                // onChange={handleChange}
                // error={errors.password !== "" ? true : false}
                // helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={(e) => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  )
                }}
              />
            </Grid>
            <Grid item>
              <Button
                className={classes.loginButton}
                size="large"
                variant="contained"
                // disabled={disabled}
              >
                Login
              </Button>
            </Grid>
            <Grid item className={classes.newUserWrapper}>
              <Grid container className={classes.newUserContainer}>
                <Grid item className={classes.newUserItem}>
                  <Typography variant="subtitle1">
                    Don't have an account?
                  </Typography>
                </Grid>
                <Grid item className={classes.newUserItem}>
                  <Button
                    className={classes.signUpButton}
                    size="large"
                    variant="outlined"
                  >
                    Sign-Up
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default Login;
