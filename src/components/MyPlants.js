import React, { useEffect, useState } from 'react';
import PlantNav from './navs/PlantNav';
import { axiosWithAuth } from './../utils/axiosWithAuth';
// import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import {connect} from 'react-redux';

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

const plantInfo = [];

//map through api to display four plants 
//create a section if there is no plants
const MyPlants = (props) => {

    const [plants, setPlants] = useState(plantInfo);
    const { push } = useHistory();

    // const addPlant = plant => {
    //     // add the given plant to the list
    //     setPlants([...plants, plant]);
    // };

    useEffect(() => {
        axiosWithAuth()
        .get(`plants/user/${props.id}`)
        .then(res => {
            // console.log('RESULTS', res.data);
            setPlants(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    // const handleEditClick = (e) => {
    //     e.preventDefault();
    //     push('/update-plant');
    // }

    const handleAddPlant = (e) => {
        e.preventDefault();
        push('/add-plant');
    }

    const handleMoreInfoClick = (e) => {
        e.preventDefault();
        push('/plant');
    }

    const classes = useStyles();
    return (
        <>
            <PlantNav />
                <Grid className={classes.gridStyling}>
                    <Typography variant='h4' className={classes.h4Styles}>My Plants</Typography>
                </Grid>
                {
                plants.map(plant => {
                    if(plants.length === 0){
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
                                        {/* <Button className={classes.buttonStyles} onClick={handleEditClick}>Edit</Button> */}
                                        <Button className={classes.buttonStyles} onClick={handleMoreInfoClick}>More Info</Button>
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
        phoneNumber: state.auth.phoneNumber
    }
};
  

export default connect(mapStateToProps, {})(MyPlants);