import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup.string().required("Login is required"),
  password: yup.string().required("Password is required")
});

