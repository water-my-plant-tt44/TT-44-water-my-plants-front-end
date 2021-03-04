import React from 'react';
import PlantNav from './navs/PlantNav';
import { Grid, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { getUser } from '../actions/appActions';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '5%',
        backgroundImage: 'url("https://images.unsplash.com/photo-1604762511431-6280a12cb835?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80")',
        height: '100vh'
    },
    container1: {
        paddingTop: '3%',
        paddingBottom: '2%',
    },
    buttonStyles: {
        background: '#B3BE9F',
        color: 'white',
        padding: '1%',
        '&:hover' : {
            background: 'white',
            color: '#B3BE9F'
        }
    }
})

function Profile(props) {

    const { getUser, id, username } = props; 
    console.log('props', props);

    const { push } = useHistory();
    const classes = useStyles();

    const handleEditPassword = (e) => {
        e.preventDefault();
        push('/update-password');
    }

    const handleEditPhoneNumber = (e) => {
        e.preventDefault();
        push('/update-phoneNumber');
    }

    return (
        <>
            <PlantNav />
            <Grid container className={classes.root}>
                <Grid item>
                    <Typography variant='h3'>
                        Welcome {username}!
                    </Typography>
                </Grid>
                <Grid item className={classes.container1}>
                    <Button onClick={handleEditPassword} className={classes.buttonStyles}>
                        Edit Password
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleEditPhoneNumber} className={classes.buttonStyles}>
                        Edit Phone Number
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log('MSTP state',state);
    return {
        id: state.auth.user.user_id,
        username: state.auth.user.username
    }
  };
  


export default connect(mapStateToProps, {getUser} )(Profile);
