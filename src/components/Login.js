import { useHistory } from "react-router-dom";
import { userLoginSubmit } from "../actions/authActions";
import { connect } from "react-redux";
import React, { useState } from "react";
import {Paper,Grid,TextField,Typography,Button,IconButton,makeStyles} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import leavesBg from "../images/leaves_bg.jpg";
import LoginSignupNav from './navs/LoginSignupNav'; // add header!!


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

const initialLogin = {
  username: "test1234",
  password: "12345678",
};

const initialHelperText = {
  username: "",
  password: ""
};

const Login = ({userLoginSubmit}) => {
  const classes = useStyles();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState(initialLogin);
  const [helperText, setHelperText] = useState(initialHelperText);

  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.username.match(/^\w{5,11}$/g) && values.password.match(/^[.\S]{7,15}$/g)) {
      setValues(initialLogin);
      userLoginSubmit(values);
      setTimeout(() => {
        history.push("/Profile");
    }, 3000);
      //console.log(values);
    } else {
      setValues(initialLogin);
      setHelperText({
        username: "Invalid Username. Please try again.",
        password: "Invalid Password. Please try again."
        });
    //   return;
    }
  };

  return (
    <>
    {/* added this after merge */}
    <LoginSignupNav /> 
      <Grid container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Typography
              variant="h3"
              className={`${classes.topText} ${classes.paperItem}`}
            >
              Login
            </Typography>
          </Grid>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Grid container className={classes.formGrid}>
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                helperText={helperText.username}
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
                helperText={helperText.password}
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
              <Button
                className={`${classes.paperItem}`}
                size="large"
                variant="contained"
                type="submit"
              >
                Login
              </Button>
            </Grid>
          </form>
          <Grid container className={classes.haveAccount}>
            <Typography className={`${classes.paperItem}`}>
              Don't have an account?
            </Typography>
            <Button
              className={`${classes.paperItem}`}
              size="large"
              variant="outlined"
              onClick={() => {history.push('/signup')}}
            >
              Sign-Up
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

export default connect(mapStateToProps, { userLoginSubmit })(Login);
