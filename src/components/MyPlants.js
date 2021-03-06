import React, { useEffect, useState } from 'react';
import PlantNav from './navs/PlantNav';
import { axiosWithAuth } from './../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import {connect} from 'react-redux';
import { getAllUserPlants } from './../actions/appActions';

const useStyles = makeStyles({
    contain: {
        display: 'flex',
        width: '20%'
    },
    gridStyling: {
        margin: '2%',
    },
    gridStyling2: {
        margin: '2%',
        display: 'flex',
        width: '100%'
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
        width: '100%',
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
        color: 'white',
        fontFamily: 'Sora',
        marginBottom: '4%',
        marginTop: '4%'
    },
    displayNone: {
        textAlign: 'center',
        margin: '5%'
    }
})


const MyPlants = (props) => {
    
    console.log('props inside my plants', props);
    
    // useEffect(() => {
    //     console.log('inside useEffect');
    // }, []);
    
    useEffect( () => {
            console.log("inside useEffect");
            props.getAllUserPlants(props.id);
        }, []);
        
        
    const { push } = useHistory();

    const handleAddPlant = (e) => {
        e.preventDefault();
        push('/add-plant');
    }

    const handleMoreInfoClick = (e, plantId) => {
        e.preventDefault();
        axiosWithAuth()
            .get(`/plants/${plantId}`)
            .then((res) => {
                push(`/plant/${plantId}`)
            })
            .catch((err) => {
                console.log("More plant info error", err);
            })
    }

    // console.log("plant props", props.plants);
    console.log("props", props);

    const classes = useStyles();
    return (
        <>
            <PlantNav />
                <Grid className={classes.gridStyling}>
                    <Typography variant='h4' className={classes.h4Styles}>My Plants</Typography>
                </Grid>
                {
                props.plants && props.plants.map(plant => {
                    // console.log("plantObject", plant);
                    if(props.plants.length === 0){
                        return (
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Typography variant='h4' className={classes.displayNone}>You currently do not have any plants.</Typography>
                                </Grid>
                            </Grid>
                        );
                    } else {
                        return (
                      <>
                        <Grid container className={classes.contain}>
                            <Grid container spacing={2} className={classes.gridStyling2}>
                                <Grid item className={classes.container}>
                                    <img src={plant.image} alt='plant' className={classes.imgStyles} />
                                    <Typography variant='h5' className={classes.h5Styles}>{plant.nickname}</Typography>
                                    <Typography variant='subtitle1' className={classes.subtitle1Styles}>{plant.species_name}</Typography>
                                    <Typography variant='subtitle2' className={classes.subtitle2Styles}>Watering: {plant.frequency} {plant.interval_type_name}</Typography>
                                    <Grid item>
                                        <Button className={classes.buttonStyles} onClick={ (e) => handleMoreInfoClick(e, plant.plant_id)}>More Info</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </>
                        );
                    }
                })
            }
            <div>
                <Button className={classes.buttonStyles} onClick={handleAddPlant}>Add Plant</Button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log('MSTP state inside myPlants',state);
    return {
        id: state.auth.user.user_id,
        username: state.auth.user.username,
        phoneNumber: state.auth.phoneNumber,
        plants: state.app.plants,
    }
};
  

export default connect(mapStateToProps, {getAllUserPlants})(MyPlants);