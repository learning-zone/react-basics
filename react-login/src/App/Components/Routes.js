import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import Admin from './Admin';
import Logout from './Logout';

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={Login} />
      <Route path='/admin' component={Admin} />
      <Route path='/logout' component={Logout} />
    </Switch>
  )
}
export default Routes;
