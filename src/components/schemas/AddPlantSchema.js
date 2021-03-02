import * as yup from "yup";

const AddPlantSchema = yup.object().shape({
  //input string
  nickname: yup
    .string()
    .trim()
    .required("Name is required.")
    .min(2, "Name must be at least 2 characters."),
  species: yup
    .string()
    .trim()
    .required("Species is required.")
    .min(3, "Species must be at least 3 characters."),
  date: yup.string(),
  time: yup.string(),
  amount: yup.number(),
  freq: yup.string(),
  img: yup.string()
});

export default AddPlantSchema;
