import React, { useState } from "react";
import PlantNav from './navs/PlantNav'
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Grid from "@material-ui/core/Grid";
import { createPlant } from './../actions/appActions';
import { connect } from 'react-redux';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

  formContainer: {
    backgroundImage: 'url("https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")',
    maxWidth: '100%',
    marginTop: '0',
    color: 'white',
    fontSize: '1.35rem',
    height: '100vh'
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

  const plantObject = {
    creator_id: props.user_id,
    species_name: '',
    nickname: '',
    frequency: '',
    interval_id: '',
    date: '',
    time: '',
    image: ''
  };

  const { createPlant, user_id } = props;
  const [plantValues, setPlantValues] = useState(plantObject);

  const classes = useStyles();

  const handleSave = (e) => {
    e.preventDefault();
    console.log('plant values', plantValues);
    createPlant(plantValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlantValues({...plantValues, [name]: value});
  }
  console.log('add plant props', props);

  return (
    <>
    <PlantNav />
      <form className={classes.formContainer} onSubmit={handleSave}>
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
              name="image"
              // value={formValues.img}
              onChange={handleChange}
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
                onChange={handleChange}
                label="Nickname"
                variant="filled"
                className={classes.textField}
              />
            </Grid>

            <Grid item>
              {/* Species */}
              <TextField
                id="filled-size-normal"
                label="species_name"
                name="species_name"
                // value={formValues.species}
                onChange={handleChange}
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
              <label htmlFor="date">
                <Typography variant='h5'>Date</Typography>
                <input
                  type="date"
                  id="date"
                  name="date"
                  // value={formValues.date}
                  onChange={handleChange}
                />
              </label>
            </Grid>

            <Grid item>
              {/* Time */}
              <label htmlFor="time">
                <Typography variant='h5'>Time</Typography>
                <input
                  type="time"
                  id="time"
                  name="time"
                  // value={formValues.time}
                  onChange={handleChange}
                />
              </label>
            </Grid>

            <Grid item className={classes.amount}>
              {/* Amount */}
              <label htmlFor="frequency">
                <Typography variant='h5'>Amount</Typography>
                <input
                  type="number"
                  id="frequency"
                  name="frequency"
                  min="1"
                  max="7"
                  // value={formValues.amount}
                  onChange={handleChange}
                />
              </label>
            </Grid>

            <Grid item className={classes.select}>
              {/* Frequency */}
              <label htmlFor="interval">
                <Typography variant='h5'>Frequency</Typography>
                <select
                  type="select"
                  id="interval"
                  name="interval_id"
                  // value={plantValues.interval_id}
                  onChange={handleChange}
                >
                  <option value="1">Daily</option>
                  <option value="2">Weekly</option>
                  <option value="3">Monthly</option>
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
            <Button 
            type='submit' className={classes.button}>
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

const mapStateToProps = (state) => {
  console.log('MSTP inside add plant', state);
  return {
    user_id: state.auth.user.user_id,
  }
}

export default connect(mapStateToProps, { createPlant })(AddPlant);
