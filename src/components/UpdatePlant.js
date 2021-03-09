import React, {useState} from "react";
import PlantNav from "./navs/PlantNav";
import { useHistory } from "react-router-dom";
import { editPlant } from "./../actions/appActions";
import {connect} from 'react-redux';

import {
  InputLabel,
  Select,
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  makeStyles,
  MenuItem,
} from "@material-ui/core";
//icon imports

import FilterVintageIcon from '@material-ui/icons/FilterVintage';

//styled 
const useStyles = makeStyles({
    root: {
      flexFlow: "column wrap",
      alignItems: "center",
      backgroundImage: `url(https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
      height: "100vh"
    },
    paper: {
      width: "25%",
      marginTop: "4%",
      padding: "1%",
      backgroundColor: "#B3BE9F"
    },
    paperItem: {
      color: "white",
      marginTop: "4%",
      marginBottom: "2%",
      borderColor: "white"
    },
    topText: {
      width: "100%",
      textAlign: "center"
    },
    formGrid: {
      flexFlow: "column wrap",
      alignItems: "center"
    },
    haveAccount: {
      flexFlow: "column wrap",
      alignItems: "center"
    }
  });


// WE NEED TO ACCESS PLANT ID AND PASS IT INTO EDIT PLANT
const UpdatePlant = (props) => {

  const classes = useStyles();

  const history = useHistory();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  //console.log('props',props)

  const plantId = props.match.params.id;
  //console.log('plant id within Update plant', plantId);

  const [currentPlant, setCurrentPlant] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentPlant({...currentPlant, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('current plant to submit', currentPlant);
    props.editPlant(plantId, currentPlant)
    history.push('/myplants')
  }

  //return statement
  return(
    <>
      <PlantNav />
      <Grid container className={classes.root}>
          <Paper className={classes.paper}>
              <Grid container>
                  <Typography
                      variant="h3"
                      className={`${classes.topText} ${classes.paperItem}`}
                  >
                      Edit Plant:
                  </Typography>
              </Grid>
              <form onSubmit={handleSubmit}>
                  <Grid container className={classes.formGrid}>
                  
                      {/* edit nickname */}
                      <TextField
                          variant="filled"
                          className={`${classes.paperItem}`}
                          fullWidth
                          label="Nickname"
                          type="text"
                          name="nickName"
                          onChange={handleChange}
                          autoComplete="off"
                          InputProps={{
                          endAdornment: (
                              <IconButton>
                              <FilterVintageIcon />
                              </IconButton>
                          )
                          }}
                      />

                      {/* edit start date */}
                      <TextField
                          variant="filled"
                          className={`${classes.paperItem}`}
                          fullWidth
                          label="Starting Date"
                          type="date"
                          name="date"
                          onChange={handleChange}
                          autoComplete="off"
                      />

                      {/* edit watering time */}
                      <TextField
                          variant="filled"
                          className={`${classes.paperItem}`}
                          fullWidth
                          label="Watering"
                          type="time"
                          name="time"
                          onChange={handleChange}
                          autoComplete="off"
                      />

                      {/* edit amount (every) */}
                      <TextField
                          variant="filled"
                          className={`${classes.paperItem}`}
                          fullWidth
                          label="Amount:"
                          type="number"
                          name="frequency"
                          onChange={handleChange}
                          autoComplete="off"
                      />

                      {/* frequency*/}
                      <InputLabel>Frequency:</InputLabel>
                      <Select
                          open={open}
                          onClose={handleClose}
                          onOpen={handleOpen}
                          onChange={handleChange}
                      >
                      <MenuItem value="">
                          <em>None</em>
                      </MenuItem>
                      <MenuItem value='1'>Daily</MenuItem>
                      <MenuItem value='2'>Weekly</MenuItem>
                      <MenuItem value='3'>Monthly</MenuItem>
                      </Select>

                      {/* submit button */}
                      <Button
                          className={`${classes.paperItem}`}
                          size="large"
                          variant="contained"
                          type="submit"
                      >
                          Submit
                      </Button>
                  </Grid>
              </form>
          </Paper>
      </Grid>
    </>
);
};

const mapStateToProps = (state) => {
  return {
    userid: state.auth.user.user_id,
    plants: state.app.plants,
  };
};

export default connect(mapStateToProps, {editPlant})(UpdatePlant);
