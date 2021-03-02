//imports
import React from 'react';
import styled from 'styled-components';

//styled change password
const StyledCP = styled.div
`
    text-align:center;
`
//constructor

//notes: phone number passed as string
const ChangePhoneNumber = (props) =>
{
    // const {handleChange, handleClick, handleSubmit, profile} = props;
    return(
        <StyledCP /*onSubmit={handleSubmit}*/>
            <form>
                {/* <h2>{profile.username}</h2> */}
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