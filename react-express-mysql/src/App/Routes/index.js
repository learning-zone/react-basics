import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('../Pages/Home'))
const About = React.lazy(() => import('../Pages/About'))

const index = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={Home} />
      <Route exact={true} path='/about-us' component={About} />
    </Switch>
  )
}

export default index
