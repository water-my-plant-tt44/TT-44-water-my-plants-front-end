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
    },
  };
  
  export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNED_UP:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                phoneNumber: action.payload.phoneNumber,
            };
        case USER_LOGGED_IN:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
            };
            
        case USER_UPDATE_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: action.payload.phoneNumber,
            };

        case USER_UPDATE_PASSWORD:
            return {
            ...state,
            password: action.payload.password,
            };

        default:
            return state;
    }
  };
  
  export default AuthReducer;
  