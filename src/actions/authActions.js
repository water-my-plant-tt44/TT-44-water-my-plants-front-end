import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios'

export const USER_SIGNED_UP = "USER_SIGNED_UP";
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_UPDATE_PHONE_NUMBER = "USER_UPDATE_PHONE_NUMBER";
export const USER_UPDATE_PASSWORD = "USER_UPDATE_PASSWORD";


// action for password and phone number change

export const userSignUpSubmit = (form) => (dispatch) => {
    console.log("user sign up action");
    axios
      .post("https://water-my-plant-tt44.herokuapp.com/api/auth/register", form)
      .then((res) => {
        console.log("SPECIFIC USER DATA:", res.data);
        dispatch({ type: USER_SIGNED_UP, payload: res.data });
      })
      .catch((err) => {
        console.log("ERROR BEFORE REDUCER", err.message);
      });
  };

export const userLoginSubmit = (form) => (dispatch) => {
    console.log("user login action");
    axios
      .post("https://water-my-plant-tt44.herokuapp.com/api/auth/login", form)
      .then((res) => {
        console.log("SPECIFIC USERNAME:", res.data.username);
        localStorage.setItem('token', res.data.token);
        console.log('token',localStorage.getItem("token"))
        dispatch({ type: USER_LOGGED_IN, payload: res.data });
      })
      .catch((err) => {
        console.log("ERROR BEFORE REDUCER", err.message);
      });
  };

