import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingLeft: '1.5%',
    paddingRight: '1.5%',
    background: '#B3BE9F',
    maxWidth: '100%',
    margin: '0 auto'
  },
  linkStyles: {
    textDecoration: 'none',
    paddingTop: '1%',
    paddingBottom: '1%',
  },
  buttonStyles: {
    color: 'white',
    fontFamily: 'Saira',
  },
  pStyles: {
      fontSize: '1.4rem',
      paddingTop: '0',
      paddingBottom: '0',
      fontFamily: 'Saira',
      color: 'white',
      paddingLeft: '1.5%',
  }
})

const PlantNav = () => {

  const classes = useStyles();

    return (
        <div className={classes.navStyles}>
            <div className={classes.pStyles}>
                <p>Water My Plants</p>
            </div>
            <div>
                <NavLink to='/' className={classes.linkStyles}>
                <Button className={classes.buttonStyles}>
                    Home
                </Button>
                </NavLink>
            </div>
        </div>
    )
}

export default PlantNav;