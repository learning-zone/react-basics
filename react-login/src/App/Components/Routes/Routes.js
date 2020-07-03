import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UserDetails from '../../Pages/UserDetails/UserDetails';
import UserForm from '../../Pages/UserForm/UserForm';
import LoginForm from '../../Pages/LoginForm/LoginForm';
import Logout from '../../Pages/Logout/Logout';


const Routes = () => {
  return (
    <Switch>
        <Route exact={true} path='/' component={LoginForm} />
        <Route exact={true} path="/user-form" component={UserForm} />
        <Route exact={true} path="/user-details" component={UserDetails} />
        <Route exact={true} path='/logout' component={Logout} />
    </Switch>
  );
}

export default Routes;
