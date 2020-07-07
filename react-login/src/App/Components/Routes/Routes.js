import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import Home from '../../Pages/Home/Home';
import UserDetails from '../../Pages/UserDetails/UserDetails';
import UserForm from '../../Pages/UserForm/UserForm';
import LoginForm from '../../Pages/LoginForm/LoginForm';
import Logout from '../../Pages/Logout/Logout';
import Header from '../Header/Header';

let header;

const Routes = () => {

  // Hide Header from Login Page
  header = (window.location.pathname === '/') ? '' : <Header />;
  return (
    <div>
     {header}
    <Switch>
        <Route exact={true} path="/" component={LoginForm} />
        <Route exact={true} path="/home" component={Home} />
        <Route exact={true} path="/user-form" component={UserForm} />
        <Route exact={true} path="/user-details" component={UserDetails} />
        <Route exact={true} path="/logout" component={Logout} />
    </Switch>
    </div>
  );
}

export default withRouter(Routes);
