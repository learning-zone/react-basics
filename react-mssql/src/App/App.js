import React from 'react';
import Header from './Components/Header/Header';
import Routes from './Components/Routes/Routes';
import  { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
