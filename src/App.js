import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Routes
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import MarketingPage from './components/MarketingPage';
import Signup from './components/Signup';
import MyPlants from './components/MyPlants';
import Plant from './components/Plant';
import AddPlant from './components/AddPlant';
import Profile from './components/Profile';


function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />

           {/* private routes after sign up/login  */}
          <PrivateRoute path='/myplants' component={MyPlants} />
          <PrivateRoute path='/plant/:id' component={Plant} />
          <PrivateRoute path='/add-plant' component={AddPlant} />
          <PrivateRoute path='/profile' component={Profile} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
