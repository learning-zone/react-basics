import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

export default class Logout extends Component {

    constructor(props){
        super(props);
        this.state = {
          formData: {
            login: false,
            store: ''
          }
        }
    }
    componentDidMount() {
      // Clear User Session
      sessionStorage.setItem('login', JSON.stringify({
        login: false,
        store: ''
      }));
      sessionStorage.clear();
      this.setState({login: false, store: ''});
    }

    render() {
      /**
       * Redirect to Login Page
       */
      if (this.state.login === false) {
          return <Redirect to="/" />
      }
      return (
          <div>
              Redirecting to Login...
          </div>
      )
    }
}
