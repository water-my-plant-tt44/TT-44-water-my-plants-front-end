import React from 'react'
import { getUser } from '../actions/appActions';
import { connect } from "react-redux";

const initial = {
    id: "",
}

const Profile = ({ getUser, state }) => {
// pass in id to getUser to fetch correct user profile
    getUser(state.user.user_id);

    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('MSTP state',state);
    return {
        id: state.user.user_id
    }
  };
  


export default connect(mapStateToProps, {getUser})(Profile);
