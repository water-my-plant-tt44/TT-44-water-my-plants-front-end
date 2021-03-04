//imports
import React from 'react';
import styled from 'styled-components';

//styled change password
const StyledCP = styled.div
`
    text-align:center;
`

const ChangePassword = (props) => {
    
    return(
        <StyledCP>
            <form>
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