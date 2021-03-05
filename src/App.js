import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Route imports
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import MarketingPage from './components/MarketingPage';
import Signup from './components/Signup';
import MyPlants from './components/MyPlants';
import Plant from './components/Plant';
import AddPlant from './components/AddPlant';
import ToBeWatered from './components/ToBeWatered';
import Profile from './components/Profile';
import UpdatePlant from './components/UpdatePlant';
import UpdatePassword from './components/UpdatePassword';
import UpdatePhoneNumber from './components/UpdatePhoneNumber';


function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route exact path='/' component={MarketingPage} />

          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />

           {/* private routes after sign up/login  */}
          <PrivateRoute path='/myplants' component={MyPlants} />
          <PrivateRoute path='/plant/:id' component={Plant} />
          <PrivateRoute path='/add-plant' component={AddPlant} />
          <PrivateRoute path='/update-plant' component={UpdatePlant} />
          <PrivateRoute path='/update-password' component={UpdatePassword} /> 
          <PrivateRoute path='/update-phoneNumber' component={UpdatePhoneNumber} /> 
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/needs-watered' component={ToBeWatered} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
