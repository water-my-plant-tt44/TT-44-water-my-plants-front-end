import { useState } from "react";
import LoginSignupNav from './navs/LoginSignupNav';

import {
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  makeStyles
} from "@material-ui/core";

import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";

import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles({
  root: {
    padding: "2%",
    alignItems: "center",
    flexFlow: "column wrap",
    backgroundImage: 'url("https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")',
    height: '90vh'
  },
  card: {
    borderRadius: "10px",
    width: "30%",
    backgroundColor: "#B3BE9F",
    padding: "1%",
    flexFlow: "column wrap",
    alignItems: "center"
  },
  textItem: {
    marginTop: "1%",
    marginBottom: "1%"
  },
  form: {
    width: "100%",
    flexFlow: "column wrap",
    alignItems: "center"
  },
  formGrid: {
    flexFlow: "column wrap"
  },
  textFieldGrid: {
    marginTop: "2%",
    marginBottom: "2%"
  },
  signUpButton: {
    flexFlow: "column wrap",
    alignItems: "center"
  },
  loginButton: {
    color: "white",
    borderColor: "white"
  },
  haveAccountContainer: {
    flexFlow: "column wrap",
    alignItems: "center",
    paddingTop: "1%"
  },
  haveAccountItem: {
    marginTop: "1%",
    marginBottom: "1%"
  }
});

const initialShowPassword = false;

const Signup = (props) => {
  // const { change, values, errors, disabled } = props;

  const [showPassword, setShowPassword] = useState(initialShowPassword);

  // const handleChange = (evt) => {
  //   const { name, value } = evt.target;
  //   change(name, value);
  // };

  const classes = useStyles();
  return (
    <>
    <LoginSignupNav />
      <Grid container className={classes.root}>
        <Grid container className={classes.card}>
          <Typography className={classes.textItem} variant="h2">
            Sign-Up
          </Typography>
          <Typography className={classes.textItem} variant="h4">
            New User
          </Typography>

          <form className={classes.form}>
            <Grid className={classes.formGrid} container>
              <Grid item className={classes.textFieldGrid}>
                <TextField
                  fullWidth
                  required
                  autoComplete="off"
                  variant="filled"
                  label="Username"
                  // helperText={errors.username}
                  // error={errors.username !== "" ? true : false}
                  name="username"
                  // value={values.username}
                  // onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <AccountCircle />
                      </IconButton>
                    )
                  }}
                />
              </Grid>
              <Grid item className={classes.textFieldGrid}>
                <TextField
                  autoComplete="off"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  // error={errors.password !== "" ? true : false}
                  // value={values.password}
                  // onChange={handleChange}
                  // material ui
                  fullWidth
                  required
                  variant="filled"
                  label="Password"
                  // helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={(e) => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    )
                  }}
                ></TextField>
              </Grid>
              <Grid item className={classes.textFieldGrid}>
                <TextField
                  fullWidth
                  required
                  label="Phone Number:"
                  variant="filled"
                  // helperText={
                    // errors.phoneNumber !== ""
                      // ? errors.phoneNumber + ": e.g (123)456-7890"
                      // : "e.g (123)456-7890"
                  // }
                  autoComplete="off"
                  type="tel"
                  onKeyDown={(e) => {
                    if (
                      e.key !== "1" &&
                      e.key !== "2" &&
                      e.key !== "3" &&
                      e.key !== "4" &&
                      e.key !== "5" &&
                      e.key !== "6" &&
                      e.key !== "7" &&
                      e.key !== "8" &&
                      e.key !== "9" &&
                      e.key !== "0" &&
                      e.key !== "(" &&
                      e.key !== ")" &&
                      e.key !== "-" &&
                      e.key !== "Backspace" &&
                      e.key !== "Shift" &&
                      e.key !== "ArrowLeft" &&
                      e.key !== "ArrowRight"
                    ) {
                      e.preventDefault();
                    }
                  }}
                  name="phoneNumber"
                  // error={errors.phoneNumber !== "" ? true : false}
                  // value={values.phoneNumber}
                  // onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <PhoneIcon />
                      </IconButton>
                    )
                  }}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Grid container className={classes.signUpButton}>
                <Button variant="contained" 
                // disabled={disabled}
                >
                  Sign-Up
                </Button>
              </Grid>
            </Grid>
            <Grid item className={classes.haveAccount}>
              <Grid container className={classes.haveAccountContainer}>
                <Typography
                  variant="subtitle1"
                  className={classes.haveAccountItem}
                >
                  Already have an account?
                </Typography>
                <Button
                  variant="outlined"
                  className={`${classes.loginButton} ${classes.haveAccountItem}`}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;