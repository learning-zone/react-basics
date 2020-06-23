import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Dashboard = React.lazy(() => import('../Pages/Dashboard/Dashboard'));
const Customer = React.lazy(() => import('../Pages/Customer/Customer'));
const Form = React.lazy(() => import('../Pages/Form/ReactForm'));
const Users = React.lazy(() => import('../Pages/Users/Users'));

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={Dashboard} />
      <Route exact={true} path='/customer' component={Customer} />
      <Route exact={true} path='/form' component={Form} />
      <Route exact={true} path='/users' component={Users} />
    </Switch>
  )
}

export default Routes
