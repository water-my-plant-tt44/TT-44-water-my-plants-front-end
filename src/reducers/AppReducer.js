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
        interval_type_name: "",
        next_watering_date: "", // based on interval
        image: "" //optional
        },
    ],

  };

  // ADD, EDIT, DELETE PLANT
  
  export const AppReducer = (state = initialState, action) => {
    console.log("STATE", state);
    switch (action.type) {
      case "ADD_PLANT":
        console.log("ADD PLANT ACTION");
        return {
          ...state,
          plants: [...state.plants, action.payload],
        };
      case "DELETE_PLANT":
        return {
          plants: state.plants.filter((plantObject) => {
            return plantObject.id !== action.payload.id;
          }),
        };
      case "EDIT_PLANT":
        return {
          user: { ...state, plants: [...state, action.payload] },
        };
      default:
        return state;
    }
  };
  
  export default AppReducer;