import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navStyles: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1.5%',
    paddingRight: '1.5%',
    textDecoration: 'none',
  },
  linkStyles: {
    textDecoration: 'none',
    paddingLeft: '1.5%',
    paddingTop: '1%',
  },
  buttonStyles: {
    fontFamily: 'Saira',
  }
})

const HomeNav = () => {

  const classes = useStyles();

    return (
        <div className={classes.navStyles}>
            <NavLink to='/login' className={classes.linkStyles}>
              <Button className={classes.buttonStyles}>
                  Login
              </Button>
            </NavLink>
            <NavLink to='/signup' className={classes.linkStyles}>
              <Button className={classes.buttonStyles}>
                  Sign Up
              </Button>
            </NavLink> 
        </div>
    )
}

export default HomeNav;
