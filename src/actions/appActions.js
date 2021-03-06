import { axiosWithAuth } from "../utils/axiosWithAuth";

export const ADD_PLANT = "ADD_PLANT";
export const DELETE_PLANT = "DELETE_PLANT";
export const EDIT_PLANT = "EDIT_PLANT";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_PLANT_INFO = "GET_PLANT_INFO";
export const GET_ALL_PLANT_INFO = "GET_ALL_PLANT_INFO";

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
      console.log("res", res);
      dispatch({ type: ADD_PLANT, payload: plantObject });
    })
    .catch((err) => {
      console.log("Error creating plant");
    });
};

export const editPlant = (plantid, plantObject) => (dispatch) => {
  console.log("editPlant action");
  axiosWithAuth()
    .put(`/plants/${plantid}`, plantObject)
    .then((res) => {
      console.log("SPECIFIC PLANT DATA:", res.data.plants);
      dispatch({ type: EDIT_PLANT, payload: res.data.plants });
    })
    .catch((err) => {
      console.log("ERROR", err.message);
    });
};

export const deletePlant = (plantid, userid) => (dispatch) => {
  console.log("BEFORE AXIOS DEL");
  axiosWithAuth()
    .delete(`/plants/${plantid}`)
    .then((res) => {
      console.log("AFTER AXIOS DELETE");
      getAllUserPlants(userid);
    })
    .catch((err) => {
      console.log("Error deleting plant");
    });
};

export const getPlant = (plantId) => (dispatch) => {
  console.log("getPlant action");
  axiosWithAuth()
    .get(`/plants/${plantId}`)
    .then((res) => {
      console.log("SPECIFIC PLANT DATA", res.data);
      dispatch({ type: GET_PLANT_INFO, payload: res.data });
    })
    .catch((err) => {
      console.log("ERROR", err.message);
    });
};

export const getAllUserPlants = (userId) => (dispatch) => {
  console.log("getAllUserPlants action");
  console.log("user id", userId);
  axiosWithAuth()
    .get(`/plants/user/${userId}`)
    .then((res) => {
      console.log("All user plants", res.data);
      dispatch({ type: GET_ALL_PLANT_INFO, payload: res.data });
    })
    .catch((err) => {
      console.log("Error grabbing plants", err);
    });
};
