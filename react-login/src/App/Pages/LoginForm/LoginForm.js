import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import './LoginForm.scss';

class LoginForm extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      currentView: "logIn",
      formData: {
        email: '',
        password: '',
        login: false,
        store: ''
      },
      submitted: false
    }
  }
  componentDidMount() {
    this.storeCollector();
  }
  /**
   * Get the token from sessionStorage
   */
  storeCollector() {
    let store = JSON.parse(sessionStorage.getItem('login'));
    if(store && store.login) {
      this.setState({login: true, store: store})
    }
  }

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
    //console.log(JSON.stringify(formData));
  }

  /**
   * Login Page
   * @param {*} e 
   */
  handleLogin = (e) => {
    e.preventDefault();
    this.setState({ submitted: true }, () => {
        setTimeout(() => this.setState({ 
            submitted: false
         }), 5000);
    });

    /**
     * POST REQUEST
     */
    const { formData } = this.state;
    console.log('formData: '+JSON.stringify(formData));
    axios.post(`/api/post/login`, { formData })
      .then(res => {
        const result = res.data.recordset;
        this.setState({ result });
        console.log("JWT Token: " + JSON.stringify(res.data.token));

        sessionStorage.setItem('login', JSON.stringify({
          login: true,
          store: res.data.token
        }))
        this.storeCollector();
      })
    }

    handleRoute = () => {
      console.log('Route Change');
    }
  render() {
    if (this.state.login) {
      return <Redirect to="user-form" onChange={this.handleRoute} />
    }
    return (
        <section id="entry-page">
          <form 
                noValidate 
                autoComplete="off" 
                onSubmit={this.handleLogin}
                method="post">
            <h2>Log In <hr/></h2>
            <fieldset>
              <TextField 
                  label="Email" 
                  variant="outlined" 
                  className="login-input-box"
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.formData.email || ""}
              />
              <TextField 
                  label="Password" 
                  variant="outlined" 
                  className="login-input-box" 
                  type="password" 
                  onChange={this.handleChange}
                  name="password"
                  value={this.state.formData.password || ""}                  
              />
            </fieldset>
            <Button 
                  variant="contained"
                  type="submit"
                  disabled={this.state.submitted}
            >{
                (this.state.submitted && 'Your form is submitted!')
                || (!this.state.submitted && 'Login')
             }
            </Button>
          </form>
      </section>
    )
  }
}

export default LoginForm;