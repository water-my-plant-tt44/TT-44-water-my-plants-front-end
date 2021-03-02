import { useState } from "react";
import LoginSignupNav from './navs/LoginSignupNav';
// import MaskedInput from "react-text-mask";
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
    alignItems: "center",
    flexFlow: "column wrap"
  },
  form: {
    width: "45%"
  },
  formGrid: {
    alignItems: "center",
    flexFlow: "column wrap"
  },
  signUpBtn: {
    justifyContent: "center"
  }
});

const initialShowPassword = false;

const Signup = ({ change, values, errors, disabled }) => {

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
        <Typography variant="h2">Sign-Up</Typography>
        <Typography variant="h4">New User</Typography>

        <form className={classes.form}>
          <Grid className={classes.formGrid} container>
            <TextField
              fullWidth
              required
              autoComplete="off"
              className={classes.formItem}
              variant="filled"
              label="Username"
            //   helperText={errors.username}
            //   error={errors.username !== "" ? true : false}
              name="username"
            //   value={values.username}
              // onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <AccountCircle />
                  </IconButton>
                )
              }}
            />
            <TextField
              fullWidth
              required
              autoComplete="off"
              variant="filled"
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
            //   helperText={errors.password}
            //   error={errors.password !== "" ? true : false}
            //   value={values.password}
              // onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={(e) => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                )
              }}
            ></TextField>
            <TextField
              fullWidth
              required
              autoComplete="off"
              variant="filled"
              label="Phone Number:"
            //   helperText={
            //     errors.phoneNumber !== ""
            //       ? errors.phoneNumber + ": e.g (123)456-7890"
            //       : "e.g (123)456-7890"
            //   }
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
            //   error={errors.phoneNumber !== "" ? true : false}
            //   value={values.phoneNumber}
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
          <Grid className={classes.signUpBtn} item>
            <Button variant="contained" disabled={disabled}>
              Sign-Up
            </Button>
          </Grid>
          <Grid item>
            <Grid container>
              <Typography variant="span">Already have an account?</Typography>
              <Button variant="outlined">Login</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default Signup;
