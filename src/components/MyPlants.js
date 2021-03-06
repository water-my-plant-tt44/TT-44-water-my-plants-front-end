import React, { useEffect, useState } from "react";
import PlantNav from "./navs/PlantNav";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { getAllUserPlants } from "./../actions/appActions";

const useStyles = makeStyles({
  background: {
    background: "linear-gradient(rgb(178,191,159), rgb(238,237,230))",
  },
  contain: {
    display: "flex",
    width: "25%",
  },
  gridStyling: {
    margin: "2%",
  },
  gridStyling2: {
    margin: "4%",
    display: "flex",
    width: "100%",
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2%'
  },
  container: {
    background: "#eef2ef",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
    paddingTop: "0",
    marginTop: "2%",
    marginRight: "2%",
    width: "100%",
  },
  h4Styles: {
    textAlign: "center",
    fontFamily: "Sora",
    marginTop: '3%',
    color: 'white'
  },
  h5Styles: {
    padding: "2%",
    fontFamily: "Sora",
  },
  subtitle1Styles: {
    fontStyle: "italic",
  },
  subtitle2Styles: {
    paddingBottom: "3%",
    paddingTop: "3%",
    fontWeight: "bold",
  },
  imgStyles: {
    height: "50vh",
    width: '100%'
  },
  buttonPlacement: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonStyles: {
    marginLeft: "2%",
    background: "#B3BE9F",
    color: "white",
    fontFamily: "Sora",
    marginBottom: "4%",
    marginTop: "4%",
    padding: '1.25%',
    '&:hover' : {
        background: 'white',
        color: '#B3BE9F'
    }
  },
  displayNone: {
    textAlign: "center",
    margin: "5%",
  },
});

const MyPlants = (props) => {
  // useEffect(() => {
  //     console.log('inside useEffect');
  // }, []);

  useEffect(() => {
    props.getAllUserPlants(props.id);
  }, []);

  const { push } = useHistory();

  const handleAddPlant = (e) => {
    e.preventDefault();
    push("/add-plant");
  };

  const handleMoreInfoClick = (e, plantId) => {
    e.preventDefault();
    axiosWithAuth()
      .get(`/plants/${plantId}`)
      .then((res) => {
        push(`/plant/${plantId}`);
      })
      .catch((err) => {
        console.log("More plant info error", err);
      });
  };

  // console.log("plant props", props.plants);
  console.log("props", props);

  const classes = useStyles();
  return (
    <>
    <Grid className={classes.background}>
      <PlantNav />
        <Grid className={classes.gridStyling}>
            <Typography variant="h3" className={classes.h4Styles}>
            My Plants
            </Typography>
        </Grid>
        <Grid container className={classes.mainContainer}>
        {props.plants &&
            props.plants.map((plant) => {
            // console.log("plantObject", plant);
            if (props.plants.length === 0) {
                return (
                <Grid container spacing={2}>
                    <Grid item>
                    <Typography variant="h4" className={classes.displayNone}>
                        You currently do not have any plants.
                    </Typography>
                    </Grid>
                </Grid>
                );
            } else {
                return (
                <>
                    <Grid container className={classes.contain}>
                    <Grid container spacing={4} className={classes.gridStyling2}>
                        <Grid item className={classes.container}>
                        {/* <img
                            src={plant.image}
                            alt="plant"
                            className={classes.imgStyles}
                        /> */}
                        <img
                            src='https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80'
                            alt="plant"
                            className={classes.imgStyles}
                        />
                        <Typography variant="h5" className={classes.h5Styles}>
                            {plant.nickname}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            className={classes.subtitle1Styles}
                        >
                            {plant.species_name}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            className={classes.subtitle2Styles}
                        >
                            Watering: {plant.frequency} {plant.interval_type_name}
                        </Typography>
                        <Grid item>
                            <Button
                            className={classes.buttonStyles}
                            onClick={(e) =>
                                handleMoreInfoClick(e, plant.plant_id)
                            }
                            >
                            More Info
                            </Button>
                        </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                </>
                );
            }
            })}
        </Grid>
            <Grid container className={classes.buttonPlacement}>
                <Button className={classes.buttonStyles} onClick={handleAddPlant}>
                Add Plant
                </Button>
            </Grid>
        </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  //   console.log("MSTP state inside myPlants", state);
  return {
    id: state.auth.user.user_id,
    username: state.auth.user.username,
    phoneNumber: state.auth.phoneNumber,
    plants: state.app.plants,
  };
};

export default connect(mapStateToProps, { getAllUserPlants })(MyPlants);
