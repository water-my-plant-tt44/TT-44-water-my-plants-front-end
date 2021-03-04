//imports
import React from 'react';
import styled from 'styled-components';
import PlantNav from './navs/PlantNav'

//styled change password
const StyledCP = styled.div
`
    text-align:center;
`

const UpdatePlant = (props) => {
    // const {handleChange, handleClick, handleSubmit, plant} = props;
    return(
        <>
        <PlantNav />
            <StyledCP /*onSubmit={handleSubmit}*/>
                <form>
                    <p>Edit Plant:</p>
                    <p>Plant Nickname:</p>
                    <input  type="text" 
                            name="nickname" 
                            // onChange={handleChange} 
                            // value={plant.nickname}
                            />
                    <p>Water Information:</p>
                    <p>Date:</p>
                    <input  type="date" 
                            name="date" 
                            // onChange={handleChange} 
                            // value={plant.date}
                            />
                    <p>Time:</p>
                    <input  type="time" 
                            name="time" 
                            // onChange={handleChange} 
                            // value={plant.time}
                            />
                    <p>Every:</p>
                    <input  type="number" 
                            name="frequency" 
                            // onChange={handleChange} 
                            // value={plant.amount}
                            />
                    <p>Frequency:</p>
                    <select name="interval_type_name" 
                            id="interval"
                            // onChange={handleChange} 
                            // value= {plant.frequency}>
                            >
                            <option value='DAILY'>daily</option>
                            <option value='WEEKLY'>weekly</option>
                            <option value='MONTHLY'>monthly</option>
                    </select>
                    <br/>
                    <br/>
                    <button /*onClick={handleClick}*/>Submit</button>
                </form>
            </StyledCP>
        </>
    );
}

export default UpdatePlant;
