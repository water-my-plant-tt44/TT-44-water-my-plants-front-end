// React
import React from "react";
import LoginSignupNav from './navs/LoginSignupNav';
import { Formik, Form, Field, ErrorMessage } from "formik";
// material ui
import {
  Paper,
  Grid,
  Button,
  Typography,
  TextField,
  makeStyles
} from "@material-ui/core";

// material ui icons
import { Visibility, VisibilityOff, AccountCircle } from "@material-ui/icons";


const useStyles = makeStyles({
  root: {
    width: "100%",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: 'url("https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")',
    height: '90vh',
  },
  card: {
    borderRadius: "10px",
    width: "100%",
    backgroundColor: "#B3BE9F",
    padding: "1%",
    flexFlow: "column wrap",
    alignItems: "center"
  },
  title: {
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
  needAccount: {
    flexFlow: "column wrap",
    alignItems: "center",
    paddingBottom: "2%"
  }
});

const Login = (props) => {
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
          <Grid item>
            <Typography className={classes.title} variant="h2">
              Login
            </Typography>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                {console.log('this is props for form',props)}
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
                  <Button variant="contained" type="submit">
                    Login
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
          <Grid container className={classes.needAccount}>
            <Typography variant="subtitle1">Don't have an account?</Typography>
            <Button variant="contained">Sign-Up</Button>
          </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
