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

import { Visibility, VisibilityOff, AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    flexFlow: "column wrap",
    alignItems: "center"
  },
  form: {
    width: "50%"
    // border: "1px solid red"
  },
  formGrid: {
    flexFlow: "column wrap",
    alignItems: "center"
    // border: "1px solid red"
  },
  formGridItem: {
    width: "100%"
    // border: "1px solid red"
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

//   console.log(values);

const handleSubmit = (e) => {
  e.preventDefault();
}

  return (
    <>
    <LoginSignupNav />
      <Grid container className={classes.root}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container className={classes.formGrid}>
            <Grid item>
              <Typography variant="h2">Login</Typography>
            </Grid>
            <Grid item className={classes.formGridItem}>
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
            <Grid item className={classes.formGridItem}>
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
              <Button variant="contained" /*disabled={disabled}*/>
                Login
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="span">New user?</Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined">Sign-Up</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default Login;