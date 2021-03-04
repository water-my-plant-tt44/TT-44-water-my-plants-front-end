import React, { useEffect, useState } from 'react';
import PlantNav from './navs/PlantNav';
import axios from 'axios';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';

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

const plantInfo = [];

const ToBeWatered = () => {
    const classes = useStyles();
    const [plants, setPlants] = useState(plantInfo);  
    const { id } = useParams();

    useEffect(() => {
        axios
        .get('https://water-my-plant-tt44.herokuapp.com/api/plants')
        .then(res => {
            console.log(res.data);
            setPlants(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    //logic there are no plants and section for has plants
    return (
        <>
        <PlantNav />
            <Grid className={classes.gridStyling}>
                <Typography variant='h4' className={classes.h4Styles}>Needs Watering</Typography>
            </Grid>
            {
                //goes through all plants and checked if the interval is daily. if interval is daily add +1 to counter. if counter is >1 do this <0 render this.
                //filter based on the criteria that the plant has an interval of daily. It returns the plants that are not daily and 
                //plant.interval !== 'daily' return plants that are weekly and monthly
                plants.map(plant => {
                    if(plant.interval_type_name !== 'daily'){
                        return (
                            <>
                                <Grid container className={classes.contain}>
                                    <Grid container spacing={2} className={classes.gridStyling2}>
                                        <Grid item className={classes.container}>
                                            <img src={plant.image} alt='plant' className={classes.imgStyles} />
                                            <Typography variant='h5' className={classes.h5Styles}>{plant.nickname}</Typography>
                                            <Typography variant='subtitle1' className={classes.subtitle1Styles}>{plant.species_name}</Typography>
                                            <Typography variant='subtitle2' className={classes.subtitle2Styles}>Watering: {plant.frequency} {plant.interval_type_name}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </>
                        );
                    } else if (plant.interval_type_name !== 'daily' && plant.interval_type_name !== 'weekly' && plant.interval_type_name !== 'monthly') {
                        return (
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Typography variant='h4' className={classes.displayNone}>You currently do not have any plants.</Typography>
                                </Grid>
                            </Grid>
                        );
                    } else {
                        return null;
                    }
                })
            }
            {/* {
            plants.map(plant => {
                if(plant.interval_type_name === 'weekly'){
                    //if any plant that needs watered daily 
                    //if they are weekly then we don't water them
                    //cycle through all plants first to check if any need to be watered, if one or more do render else statement is they do render statement
                    return (
                        <Grid container spacing={2}>
                            <Grid item>
                                <Typography variant='h4' className={classes.displayNone}>You currently do not have any plants that need watered.</Typography>
                            </Grid>
                        </Grid>
                    );
                } else {
                    return (
                    <>
                        <Grid container spacing={2} className={classes.gridStyling2}>
                            <Grid item className={classes.container}>
                                <img src={plant.image} alt='plant' className={classes.imgStyles} />
                                <Typography variant='h5' className={classes.h5Styles}>{plant.nickname}</Typography>
                                <Typography variant='subtitle1' className={classes.subtitle1Styles}>{plant.species_name}</Typography>
                                <Typography variant='subtitle2' className={classes.subtitle2Styles}>Watering: {plant.frequency} {plant.interval_type_name}</Typography>
                            </Grid>
                        </Grid>
                    </>
                    );
                }
            })
        } */}
    </>
    )
}

export default ToBeWatered;
