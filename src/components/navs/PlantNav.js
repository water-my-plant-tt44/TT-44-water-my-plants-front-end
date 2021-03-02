import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "1.5%",
    paddingRight: "1.5%",
    background: "#B3BE9F",
    maxWidth: "100%",
    margin: "0",
  },
  linkStyles: {
    textDecoration: "none",
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingRight: "5%",
    paddingLeft: "3%",
  },
  buttonStyles: {
    color: "white",
    fontFamily: "Saira",
  },
  divStyles: {
    width: "50%",
  },
  pStyles: {
    fontSize: "1.4rem",
    paddingTop: "0",
    paddingBottom: "0",
    fontFamily: "Saira",
    color: "white",
  },
});

const PlantNav = () => {
  const classes = useStyles();

  //   const logout = () => {
  //     axiosWithAuth()
  //     .post('/api/logout')
  //     .then(() => {
  //       //remove the token from localStorage
  //       //re-route to home
  //       localStorage.removeItem('token')
  //       history.push('/')
  //     });
  //   };

  return (
    <div className={classes.navStyles}>
      <div className={classes.pStyles}>
        <p>Water My Plants</p>
      </div>
      <div className={classes.divStyles}>
        <NavLink to="/" className={classes.linkStyles}>
          <Button className={classes.buttonStyles}>Home</Button>
        </NavLink>
        <NavLink to="/myplants" className={classes.linkStyles}>
          <Button className={classes.buttonStyles}>My Plants</Button>
        </NavLink>
        <NavLink to="/needs-watered" className={classes.linkStyles}>
          <Button className={classes.buttonStyles}>Watering</Button>
        </NavLink>
        <NavLink to="/profile" className={classes.linkStyles}>
          <Button className={classes.buttonStyles}>Profile</Button>
        </NavLink>
        <NavLink to="/" /*{onClick={logout}}*/ className={classes.linkStyles}>
          <Button className={classes.buttonStyles}>Logout</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default PlantNav;
