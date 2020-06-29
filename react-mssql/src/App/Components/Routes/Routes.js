import React from 'react';
import UserDetails from '../../Pages/UserDetails/UserDetails';
import UserForm from '../../Pages/UserForm/UserForm';
import { Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <Switch>
        <Route exact={true} path="/user-form" component={UserForm} />
        <Route exact={true} path="/user-details" component={UserDetails} />
    </Switch>
  );
}

export default Routes;
