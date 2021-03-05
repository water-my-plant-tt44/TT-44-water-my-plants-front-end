//imports
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {userUpdatePhoneNumber} from '../../actions/authActions';
import { useHistory } from "react-router-dom";

//styled change password
const StyledCP = styled.div
`
    text-align:center;
`

const ChangePhoneNumber = (props) => {

    const { id, userUpdatePhoneNumber, phoneNumber } = props; 
    const history = useHistory();

    const [phoneNumber_v2, setPhoneNumber] = useState(phoneNumber);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPhoneNumber({[name]: value });
        console.log(e.target.value);
    }

    const handlePhoneNumberSubmit = (e) => {
        e.preventDefault();
        console.log('phone number being sent', phoneNumber_v2);
        // setTimeout( () => {
            userUpdatePhoneNumber(phoneNumber_v2, id);
        // }, 2000)
        
        history.push('/profile')
    }

    return(
        <StyledCP>
            <form onSubmit={handlePhoneNumberSubmit}>
                <p>Change Phone Number:</p>
                <input  type="text" 
                        name="phoneNumber" 
                        onChange={handleChange} 
                        // value={profile.phonenumber}/>
                        />
                <button>Submit</button>
            </form>
        </StyledCP>
    )
}

const mapStateToProps = (state) => {
    console.log('MSTP state inside ChangePhoneNumber',state);
    return {
        id: state.auth.user.user_id,
        username: state.auth.user.username,
        phoneNumber: state.auth.phoneNumber
    }
};
  

export default connect(mapStateToProps, {userUpdatePhoneNumber})(ChangePhoneNumber);