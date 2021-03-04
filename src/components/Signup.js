import React from "react";
import LoginSignupNav from './navs/LoginSignupNav';
import { Formik, Form, Field, ErrorMessage } from "formik";

import {
  Paper,
  Grid,
  Button,
  Typography,
  TextField,
  makeStyles
} from "@material-ui/core";

import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";

import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles({
  root: {
    padding: "2%",
    alignItems: "center",
    flexFlow: "column wrap",
    backgroundImage: 'url("https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")',
    height: '90vh'
  },
  card: {
    borderRadius: "10px",
    width: "100%",
    backgroundColor: "#B3BE9F",
    padding: "1%",
    flexFlow: "column wrap",
    alignItems: "center"
  },
  text: {
    textAlign: "center"
  },
  formGrid: {
    width: "35vw",
    flexFlow: "column wrap",
    alignItems: "center",
    padding: "5%",
    paddingBottom: "2%"
  },
  field: {
    marginTop: "2%",
    marginBottom: "2%"
  },
  haveAccount: {
    flexFlow: "column wrap",
    alignItems: "center",
    paddingBottom: "2%"
  }
});

const Signup = (props) => {
  const classes = useStyles();

  const { initialValues, validationSchema } = props;

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
    <LoginSignupNav />
      <Grid container className={classes.root}>
        <Paper>
          <Grid className={classes.card}>
          <Grid>
            <Typography className={classes.text} variant="h2">
              Sign-Up
            </Typography>
            <Typography className={classes.text} variant="h5">
              New User
            </Typography>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Grid container className={classes.formGrid}>
                  <Field
                    className={classes.field}
                    required
                    fullWidth
                    as={TextField}
                    name="username"
                    label="Username"
                    helperText={<ErrorMessage name="username" />}
                    // value={props.values.username}
                    autoComplete="off"
                  />
                  <Field
                    className={classes.field}
                    required
                    fullWidth
                    as={TextField}
                    name="password"
                    label="Password"
                    helperText={<ErrorMessage name="password" />}
                    // value={props.values.password}
                    autoComplete="off"
                  />
                  <Field
                    className={classes.field}
                    required
                    fullWidth
                    as={TextField}
                    name="phoneNumber"
                    label="Phone Number"
                    helperText={<ErrorMessage name="phoneNumber" />}
                    // value={props.values.phoneNumber}
                    autoComplete="off"
                  />
                  <Button variant="contained" type="submit">
                    Sign-Up
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
          <Grid container className={classes.haveAccount}>
            <Typography variant="subtitle1">
              Already have an account?
            </Typography>
            <Button variant="contained">Login</Button>
          </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Signup;
