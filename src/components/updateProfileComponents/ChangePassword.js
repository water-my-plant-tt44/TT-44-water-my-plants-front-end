//imports
import React from 'react';
import styled from 'styled-components';

//styled change password
const StyledCP = styled.div
`
    text-align:center;
`
//constructor
const ChangePassword = (props) => {
    // const {handleChange, handleClick, handleSubmit, profile} = props;
    return(
        <StyledCP /*onSubmit={handleSubmit}*/>
            <form>
                {/* <h2>{profile.username}</h2> */}
                <p>Change Password:</p>
                <input  type="password" 
                        name="password" 
                        // onChange={handleChange} 
                        // value={profile.password}/>
                        />
                <button>Submit</button>
            </form>
        </StyledCP>
    )
}

export default ChangePassword;