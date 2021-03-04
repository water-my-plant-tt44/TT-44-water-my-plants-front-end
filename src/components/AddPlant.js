import React, { useState } from "react";
import PlantNav from './navs/PlantNav'
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

  formContainer: {
    backgroundImage: 'url("https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")',
    maxWidth: '100%',
    marginTop: '0',
    color: 'white',
    fontSize: '1.35rem',
    height: '90vh'
  },
  title: {
    textAlign: 'center',
    paddingTop: '3%',
    paddingBottom: '2%'
  },
  button: {
    background: "#b3be9f",
    color: "white",
    borderRadius: "10px"
  },

  input: {
    display: "none"
  },
  imageContainer: {
    textAlign: 'center',
    paddingLeft: '4%'
  },
  uploadButton: {
    opacity: "1",
    border: "5px solid white",
    padding: '20%'
  },
  root: {
    flexFlow: "row",
    padding: "2%"
  },
  textInputs: {
    width: "100%"
  },
  textField: {
    background: "white",
    width: "100%"
  },
  h5Styles: {
      paddingTop: '10%',
  }
});


const AddPlant = (props) => {
  const classes = useStyles();

  return (
    <>
    <PlantNav />
      <form className={classes.formContainer}>
            {/* Header */}
            <Grid item>
              <Typography variant='h3' className={classes.title}>Add a New Plant</Typography>
            </Grid>
      {/* Root Container */}
      <Grid 
      container 
      className={classes.root}    
      >
        <Grid container className={classes.imageContainer}>
          <Grid item>
            {/* Img */}
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
              name="img"
              // value={formValues.img}
              // onChange={onChange}
            />

            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                className={classes.uploadButton}
              >
                <PhotoCamera />
              </IconButton>
            </label>
            <Typography variant='h5' className={classes.h5Styles}>Upload Picture</Typography>
          </Grid>
        </Grid>

          <Grid
            container
            className={classes.textInputs}
            spacing={1}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              {/* Nickname */}
              <TextField
                id="filled-size-normal"
                name="nickname"
                // value={formValues.nickname}
                // onChange={onChange}
                label="Nickname"
                variant="filled"
                className={classes.textField}
              />
            </Grid>

            <Grid item>
              {/* Species */}
              <TextField
                id="filled-size-normal"
                label="Species"
                name="species"
                // value={formValues.species}
                // onChange={onChange}
                variant="filled"
                className={classes.textField}
              />
            </Grid>
          </Grid>

          <Grid
            container
            className={classes.waterInfo}
            spacing={1}
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item><Typography variant='h4'>Watering Information</Typography></Grid>

            <Grid item>
              {/* Date */}
              <label for="date">
                <Typography variant='h5'>Date</Typography>
                <input
                  type="date"
                  id="date"
                  name="date"
                  // value={formValues.date}
                  // onChange={onChange}
                />
              </label>
            </Grid>

            <Grid item>
              {/* Time */}
              <label for="time">
                <Typography variant='h5'>Time</Typography>
                <input
                  type="time"
                  id="time"
                  name="time"
                  // value={formValues.time}
                  // onChange={onChange}
                />
              </label>
            </Grid>

            <Grid item className={classes.amount}>
              {/* Amount */}
              <label for="frequency">
                <Typography variant='h5'>Amount</Typography>
                <input
                  type="number"
                  id="frequency"
                  name="frequency"
                  min="1"
                  max="7"
                  // value={formValues.amount}
                  // onChange={onChange}
                />
              </label>
            </Grid>

            <Grid item className={classes.select}>
              {/* Frequency */}
              <label for="interval">
                <Typography variant='h5'>Frequency</Typography>
                <select
                  type="select"
                  id="interval"
                  name="interval"
                  // value={formValues.freq}
                  // onChange={onChange}
                >
                  <option value="DAILY">Daily</option>
                  <option value="WEEKLY">Weekly</option>
                  <option value="MONTHLY">Monthly</option>
                </select>
              </label>
              {/* <SimpleSelect name="freq" value={formValues.freq} /> */}
            </Grid>
          </Grid>
    </Grid>
        <Grid
          container
          className="buttons"
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            {/* Save */}
            <Button /*onChange={onChange}*/ className={classes.button}>
              Save
            </Button>
          </Grid>
          <Grid item>
            {/* Delete */}
            <Button /*onChange={onChange}*/ className={classes.button}>
              Delete
            </Button>
          </Grid>
        </Grid>   
    </form>
    </>
  );
};

export default AddPlant;
