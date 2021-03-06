import React, {useState} from "react";
import styled from "styled-components";
import PlantNav from "./navs/PlantNav";
import { useHistory } from "react-router-dom";
import { editPlant } from "./../actions/appActions";
import {connect} from 'react-redux';

const StyledCP = styled.div`
  text-align: center;
`;

// WE NEED TO ACCESS PLANT ID AND PASS IT INTO EDIT PLANT
const UpdatePlant = (props) => {

  const history = useHistory();

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

  return (
    <>
      <PlantNav />
      <StyledCP /*onSubmit={handleSubmit}*/>
        <form onSubmit={handleSubmit} >
          <p>Edit Plant:</p>
          <p>Plant Nickname:</p>
          <input
            type="text"
            name="nickname"
            onChange={handleChange}
            // value={plant.nickname}
          />
          <p>Water Information:</p>
          <p>Date:</p>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            // value={plant.date}
          />
          <p>Time:</p>
          <input
            type="time"
            name="time"
            onChange={handleChange}
            // value={plant.time}
          />
          <p>Every:</p>
          <input
            type="number"
            name="frequency"
            onChange={handleChange}
            // value={plant.amount}
          />
          <p>Frequency:</p>
          <select
            name="interval_type_name"
            id="interval"
            onChange={handleChange}
            // value= {plant.frequency}>
          >
            <option value="1">daily</option>
            <option value="2">weekly</option>
            <option value="3">monthly</option>
          </select>
          <br />
          <br />
          <button /*onClick={handleClick}*/>Submit</button>
        </form>
      </StyledCP>
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
