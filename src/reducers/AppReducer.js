import {ADD_PLANT,DELETE_PLANT, EDIT_PLANT, GET_USER_INFO, GET_PLANT_INFO, GET_ALL_PLANT_INFO } 
from '../actions/appActions'


const initialState = {
    users: [ {
        username: "",
        plants: [],
        },
    ],
    plants: [ {
        id: "", // string or int?
        nickname: "",
        species_name: "",
        h2oFrequency: "", // need to determine, dropdown? Check with Ruben
        interval_type_name: "", // based on interval
        image: "", //optional,
        watered: false
        },
    ],

  };

  // ADD, EDIT, DELETE PLANT
  
  export const AppReducer = (state = initialState, action) => {
    console.log("STATE", state);
    switch (action.type) {
      case ADD_PLANT:
        console.log("Action Payload", action.payload);
        return {
          ...state.app,
          plants: [...state.app.plants, action.payload],
        };
      case DELETE_PLANT:
        return {
          ...state.app,
          plants: state.app.plants.filter((plantObject) => {
            return plantObject.id !== action.payload.id;
          }),
        };
      case EDIT_PLANT:
        return {
          users: { ...state.app, plants: [...state.app.plants, action.payload] },
        };
      case GET_USER_INFO: 
        return {
          ...state.auth
        }
      case GET_PLANT_INFO:
        return {
          plants: {...state.app.plants}
        }
      case GET_ALL_PLANT_INFO: 
        return {
          ...state.app,
            plants: {
              id: action.payload.plant_id,
              nickname: action.payload.nickname,
              species_name: action.payload.species_name,
              h2oFrequency: action.payload.frequency, 
              interval_type_name: action.payload.interval_type_name,
              image: action.payload.image,
              watered: action.payload.watered
            }
        };
      default:
        return state;
    }
  };
  
  export default AppReducer;