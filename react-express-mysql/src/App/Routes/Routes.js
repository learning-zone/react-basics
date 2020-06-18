import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('../Pages/Home/Home'))
const About = React.lazy(() => import('../Pages/About/About'))

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={Home} />
      <Route exact={true} path='/about-us' component={About} />
    </Switch>
  )
}

export default Routes
