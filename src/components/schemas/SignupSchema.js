import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  username: yup.string().required("A username is required"),
  password: yup.string().required("A password is required"),
  phoneNumber: yup
    .string()
    .required("A phone number is required")
    .min(13, "Must be a valid phone number")
    .max(13, "Must be a valid phone number")
});
