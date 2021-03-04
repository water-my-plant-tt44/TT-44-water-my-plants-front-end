import React from 'react'
import { getUser } from '../actions/appActions';
import { connect } from "react-redux";

const Profile = (props) => {
// pass in id to getUser to fetch correct user profile

const { getUser, id } = props;

    getUser(id);

    return (
        <div>
            <h1>Here is id: {id}</h1>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('MSTP state',state);
    return {
        id: state.auth.user.user_id
    }
  };
  


export default connect(mapStateToProps, {getUser} )(Profile);
