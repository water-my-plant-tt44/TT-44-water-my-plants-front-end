//imports
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {userUpdatePhoneNumber} from '../../actions/authActions';
import { useHistory } from "react-router-dom";

import {
    Paper,
    Grid,
    TextField,
    Typography,
    Button,
    IconButton,
    makeStyles
  } from "@material-ui/core";
  import PhoneIcon from "@material-ui/icons/Phone";
  
  //styled
  const useStyles = makeStyles({
    root: {
      flexFlow: "column wrap",
      alignItems: "center",
      backgroundImage: `url(https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
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
  

const ChangePhoneNumber = (props) => {

    const { id, userUpdatePhoneNumber, phoneNumber } = props; 
    const history = useHistory();

    const [phoneNumber_v2, setPhoneNumber] = useState(phoneNumber);

    const classes = useStyles();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPhoneNumber({[name]: value });
        console.log(e.target.value);
    }

    const handlePhoneNumberSubmit = (e) => {
        e.preventDefault();
        console.log('phone number being sent', phoneNumber_v2);
        // setTimeout( () => {
            userUpdatePhoneNumber(phoneNumber_v2, id);
        // }, 2000)
        
        history.push('/profile')
    }

    return (
        <>
          <Grid container className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container>
                <Typography
                  variant="h3"
                  className={`${classes.topText} ${classes.paperItem}`}
                >
                  Change Phone Number:
                </Typography>
              </Grid>
              <form onSubmit={handlePhoneNumberSubmit}>
                <Grid container className={classes.formGrid}>
                  <TextField
                    variant="filled"
                    className={`${classes.paperItem}`}
                    fullWidth
                    required
                    placeholder='e.g. (123)456-7890'
                    // label="Phone Number"
                    type="tel"
                    name="phoneNumber"
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
                    Submit
                  </Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </>
      );
}

const mapStateToProps = (state) => {
    console.log('MSTP state inside ChangePhoneNumber',state);
    return {
        id: state.auth.user.user_id,
        username: state.auth.user.username,
        phoneNumber: state.auth.phoneNumber
    }
};
  

export default connect(mapStateToProps, {userUpdatePhoneNumber})(ChangePhoneNumber);