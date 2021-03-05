//imports
//imports
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {userUpdatePassword} from '../../actions/authActions';
import { useHistory } from "react-router-dom";

//styled change password
const StyledCP = styled.div
`
    text-align:center;
`



const ChangePassword = (props) => {

    const { id, userUpdatePassword, phoneNumber } = props; 
    const history = useHistory();

    const [newPassword, setPassword] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPassword({[name]: value });
        console.log(e.target.value);
    }

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        console.log('password being sent', newPassword);
        // setTimeout( () => {
            userUpdatePassword(newPassword, id);
        // }, 2000)
        
        history.push('/profile')
    }

    
    return(
        <StyledCP>
            <form onSubmit={handlePasswordSubmit}>
                <p>Change Password:</p>
                <input  type="password" 
                        name="password" 
                        onChange={handleChange} 
                        // value={profile.password}/>
                        />
                <button>Submit</button>
            </form>
        </StyledCP>
    )
}
const mapStateToProps = (state) => {
    console.log('MSTP state inside ChangePassword',state);
    return {
        id: state.auth.user.user_id,
        username: state.auth.user.username,
        phoneNumber: state.auth.phoneNumber
    }
};
  

export default connect(mapStateToProps, {userUpdatePassword})(ChangePassword);