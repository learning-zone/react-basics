import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

export default class Logout extends Component {

    constructor(props){
        super(props);
        this.state = {
          formData: {
            isLoggedIn: false,
            accessToken: ''
          }
        }
    }
    componentDidMount() {
      // Clear User Session
      sessionStorage.setItem('user', JSON.stringify({
        isLoggedIn: false,
        accessToken: ''
      }));
      sessionStorage.clear();
      this.setState({isLoggedIn: false, accessToken: ''});
    }

    render() {
      /**
       * Redirect to Login Page
       */
      if (this.state.isLoggedIn === false) {
          return <Redirect to="/" />
      }
      return (
          <div>
              Redirecting to Login Page...
          </div>
      )
    }
}
