import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginForm from './LoginForm';
import Admin from './Admin';
import Logout from './Logout';

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={LoginForm} />
      <Route path='/admin' component={Admin} />
      <Route path='/logout' component={Logout} />
    </Switch>
  )
}
export default Routes;
