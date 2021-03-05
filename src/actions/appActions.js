import {axiosWithAuth} from "../utils/axiosWithAuth";

export const ADD_PLANT = "ADD_PLANT";
export const DELETE_PLANT = "DELETE_PLANT";
export const EDIT_PLANT = "EDIT_PLANT";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_PLANT_INFO = "GET_PLANT_INFO";

//action creators returning action objects
// use dispatch!

export const getUser = (id) => (dispatch) => {
  console.log("getUser action");
  axiosWithAuth()
    .get(`/users/${id}`) // make dynamic w/ userID
    .then((res) => {
      console.log("SPECIFIC USER DATA:", res.data);
      dispatch({ type: GET_USER_INFO, payload: res.data });
    })
    .catch((err) => {
      console.log("ERROR", err.message);
    });
};

export const createPlant = (plantObject) => (dispatch) => {
  axiosWithAuth()
    .post("/plants", plantObject)
    .then((res) => {
      console.log('res', res);
      dispatch({ type: ADD_PLANT, payload: plantObject });
    })
    .catch((err) => {
      console.log("Error creating plant");
    });
};

export const editPlant = (plantObject) => (dispatch) => {
    console.log("editPlant action");
    axiosWithAuth()
      .put("editPlant endpoint", plantObject) // TBD
      .then((res) => {
        console.log("SPECIFIC PLANT DATA:", res.data.plants);
        dispatch({ type: EDIT_PLANT, payload: res.data.plants });
      })
      .catch((err) => {
        console.log("ERROR", err.message);
      });
  };

export const deletePlant = (plantObject) => (dispatch) => {
  axiosWithAuth()
    .delete("plant deletion endpoint")
    .then((res) => {
      dispatch({ type: DELETE_PLANT, payload: res.data.plants });
    })
    .catch((err) => {
      console.log("Error deleting plant");
    });
};
