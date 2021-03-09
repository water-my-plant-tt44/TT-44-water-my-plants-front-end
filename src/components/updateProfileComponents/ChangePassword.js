//imports
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {userUpdatePassword} from '../../actions/authActions';
import { useHistory } from "react-router-dom";

import {
    Grid,
    Paper,
    TextField,
    Typography,
    Button,
    IconButton,
    makeStyles
  } from "@material-ui/core";
  import { Visibility, VisibilityOff } from "@material-ui/icons";
  
  //styled change password
  const useStyles = makeStyles({
    root: {
      flexFlow: "column wrap",
      alignItems: "center",
      backgroundImage: `url(https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?cs=srgb&dl=pexels-sohail-na-807598.jpg&fm=jpg)`,
      height: "100vh"
    },
    paper: {
      width: "25%",
      marginTop: "4%",
      padding: "1%",
      backgroundColor: "#B3BE9F",
      paddingBottom: '2%'
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

const ChangePassword = (props) => {

    const { id, userUpdatePassword, phoneNumber } = props; 
    const history = useHistory();

    const [newPassword, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const classes = useStyles();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPassword({[name]: value });
        console.log(e.target.value);
    }

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        console.log('password being sent', newPassword);
        // setTimeout( () => {
            userUpdatePassword(newPassword, id);
        // }, 2000)
        
        history.push('/profile')
    }
    //helper functions
  const handleShowPassword = (e) => 
  {
    setShowPassword(!showPassword);
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
              Change Password
            </Typography>
          </Grid>
          <form onSubmit={handlePasswordSubmit}>
            <Grid container className={classes.formGrid}>
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                error={
                  newPassword !== "" && !newPassword.match(/^[.\S]{7,15}$/g)
                  //error
                }
                helperText={
                  newPassword !== "" && !newPassword.match(/^[.\S]{7,15}$/g)
                    ? "Required: 7-15 characters, special characters allowed, no spaces"
                    : ""
                }
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
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
                Change Password
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  );
}
const mapStateToProps = (state) => {
    console.log('MSTP state inside ChangePassword',state);
    return {
        id: state.auth.user.user_id,
        username: state.auth.user.username,
        phoneNumber: state.auth.phoneNumber
    }
};
  

export default connect(mapStateToProps, {userUpdatePassword})(ChangePassword);