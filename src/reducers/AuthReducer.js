//Action imports
import {
    USER_LOGGED_IN,
    USER_SIGNED_UP,
    USER_UPDATE_PHONE_NUMBER,
    USER_UPDATE_PASSWORD
  } from "../actions/authActions";

const initialState = {
    user: {
      username: "",
      phoneNumber: "",
      password: "",
      user_id: ""
    },
  };
  
  export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNED_UP:
            return {
                // ...state,
                user : {
                    ...state.user,
                    username: action.payload.username,
                    password: action.payload.password,
                    phoneNumber: action.payload.phoneNumber,
                }
                
            };
        case USER_LOGGED_IN:
            return {
                ...state.auth,
                
                    user : {
                        ...state.user,
                        username: action.payload.username,
                        password: action.payload.password,
                        phoneNumber: action.payload.phoneNumber,
                        user_id: action.payload.user_id,
                    }
                
                
 
            };

        case USER_UPDATE_PHONE_NUMBER:
            return {
                ...state,
                user: {
                    ...state.user,
                    phoneNumber: action.payload.phoneNumber,
                }
                
            };

        case USER_UPDATE_PASSWORD:
            return {
                ...state,
                user : {
                    ...state.user,
                    password: action.payload.password,
                }

            };

        default:
            return state;
    }
  };
  
  export default AuthReducer;
  