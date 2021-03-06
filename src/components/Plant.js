import React, { useEffect, useState } from "react";
import PlantNav from "./navs/PlantNav";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { deletePlant } from "./../actions/appActions";
import { getPlant, editPlant } from "./../actions/appActions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const useStyles = makeStyles({
  mainContainer: {
    background: "#cacaca",
    maxWidth: "80%",
    margin: "0 auto",
    height: "80vh",
    marginTop: "4%",
    marginBottom: "4%",
    display: "flex",
    flexWrap: "wrap",
    borderRadius: "20px",
  },
  imgContainer: {
    width: "50%",
    height: "80vh",
  },
  img: {
    height: "75vh",
    width: "100%",
    borderRadius: "20px",
    paddingLeft: "3%",
    paddingTop: "3%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    height: "80vh",
    paddingLeft: "5%",
    paddingTop: "4%",
  },
  items: {
    padding: "3%",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "14%",
  },
  buttonStyles: {
    background: "#B3BE9F",
    color: "white",
    "&:hover": {
      background: "white",
      color: "#B3BE9F",
    },
    margin: "1%",
    padding: "3%",
    fontFamily: "Saira",
  },
  textStyles: {
    fontFamily: "Sora",
  },
  speciesStyles: {
    fontStyle: "italic",
  },
  header: {
    fontWeight: "bolder",
    fontFamily: "Sora",
  },
});

// const plantObj = {
//         id: null,
//         nickname: "",
//         species_name: "",
//         interval_type_name: "",
//         next_watering_date: "", // based on interval
//         image: "" //optional
// }

const Plant = (props) => {
  const classes = useStyles();
  const { push } = useHistory();
  const plantId = props.match.params.id;
  // const { deletePlant } = props;

  const [currentPlant, setCurrentPlant] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/plants/${plantId}`)
      .then((res) => {
        setCurrentPlant(res.data[0]);
      })
      .catch((err) => {
        console.log("ERROR", err.message);
      });
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    props.editPlant(plantId, currentPlant); // MOVE TO UpdatePlant and update handleclick for submit
    push("/update-plant");
  };

  const handleDelete = (e, userid) => {
    e.preventDefault();
    console.log("HANDLEDELETE IN PLANT");
    props.deletePlant(plantId, userid);
    console.log("AFTER DEL FUNc");
    push("/myplants");
  };

  return (
    <>
      <PlantNav />
      <Grid container className={classes.mainContainer}>
        <Grid container className={classes.imgContainer}>
          <Grid item>
            <img
              src="https://images.unsplash.com/photo-1604762512526-b7ce049b5764?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="plant"
              className={classes.img}
            />
            {/* <img src={image} alt='plant' className={classes.img} /> */}
          </Grid>
        </Grid>
        <Grid container className={classes.textContainer}>
          <Grid item className={classes.items}>
            <Typography variant="h4" className={classes.header}>
              {/* Sandra The Plant */}
              {currentPlant.nickname}
            </Typography>
          </Grid>
          <Grid item className={classes.items}>
            <Typography variant="h5" className={classes.speciesStyles}>
              {/* Maximus Pollergoney */}
              {currentPlant.species_name}
            </Typography>
          </Grid>
          <Grid item className={classes.items}>
            <Typography variant="subtitle1" className={classes.textStyles}>
              {/* H2O Frequency: 2 days */}
              H2O Frequency: {currentPlant.frequency}{" "}
              {currentPlant.interval_type_name}
            </Typography>
          </Grid>
          <Grid item className={classes.items}>
            <Typography variant="subtitle1" className={classes.textStyles}>
              {/* Time: 8:00 am */}
              Time: {currentPlant.time}
            </Typography>
          </Grid>
          <Grid container className={classes.buttonContainer}>
            <Button
              className={classes.buttonStyles}
              onClick={(e) => {
                handleEdit(e, props.plants.plant_id);
              }}
            >
              Edit Plant
            </Button>
            <Button
              className={classes.buttonStyles}
              onClick={(e) => {
                handleDelete(e, props.userid);
              }}
            >
              Delete Plant
            </Button>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography
                variant="subtitle2"
                className={classes.textStyles}
              ></Typography>
            </Grid>
          </Grid>
        </Grid>
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

export default connect(mapStateToProps, { deletePlant, editPlant, getPlant })(
  Plant
);
