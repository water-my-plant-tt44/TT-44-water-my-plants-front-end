import React from 'react';
import PlantNav from './navs/PlantNav';
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    gridStyling: {
        margin: '2%',
        maxWidth: '100%'
    },
    container: {
        background: 'lightgray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%',
        paddingTop: '0',
        marginTop: '2%',
        marginRight: '2%',
        width: '18%'
    },
    h4Styles: {
        textAlign: 'center',
        fontFamily: 'Sora'
    },
    h5Styles: {
        padding: '2%',
        fontFamily: 'Sora'
    },
    subtitle1Styles: {
        fontStyle: 'italic'
    },
    subtitle2Styles: {
        paddingBottom: '3%',
        paddingTop: '3%',
        fontWeight: 'bold'
    },
    imgStyles: {
        height: '50vh'
    },
    buttonStyles: {
        marginLeft: '2%',
        background: '#B3BE9F',
        color: 'white'
    }
})

const ToBeWatered = () => {
    const classes = useStyles();
    return (
        <div>
            <PlantNav />
            <Grid className={classes.gridStyling}>
                <Typography variant='h4' className={classes.h4Styles}>To Be Watered</Typography>
            </Grid>
            <Grid container spacing={2} className={classes.gridStyling}>
                <Grid item className={classes.container}>
                    <img src='https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' alt='plant' className={classes.imgStyles} />
                    <Typography variant='h5' className={classes.h5Styles}>Sandra The Plant</Typography>
                    <Typography variant='subtitle1' className={classes.subtitle1Styles}>Erotus Maximus</Typography>
                    <Typography variant='subtitle2' className={classes.subtitle2Styles}>Next watering in: 2 days</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default ToBeWatered;
