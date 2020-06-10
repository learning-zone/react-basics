import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Pradeep" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);