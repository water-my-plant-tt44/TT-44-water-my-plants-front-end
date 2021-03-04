//imports
import React from 'react';
import styled from 'styled-components';

//styled change password
const StyledCP = styled.div
`
    text-align:center;
`

const ChangePhoneNumber = (props) =>
{
    return(
        <StyledCP>
            <form>
                <p>Change Phone Number:</p>
                <input  type="text" 
                        name="phonenumber" 
                        // onChange={handleChange} 
                        // value={profile.phonenumber}/>
                        />
                <button>Submit</button>
            </form>
        </StyledCP>
    )
}

export default ChangePhoneNumber;