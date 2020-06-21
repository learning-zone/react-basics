import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Dashboard = React.lazy(() => import('../Pages/Dashboard/Dashboard'));
const Customer = React.lazy(() => import('../Pages/Customer/Customer'));
const Reports = React.lazy(() => import('../Pages/Reports/Reports'));

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={Dashboard} />
      <Route exact={true} path='/customer' component={Customer} />
      <Route exact={true} path='/reports' component={Reports} />
    </Switch>
  )
}

export default Routes
