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
      formData: {
        email: '',
        password: '',
        isLoggedIn: false,
        accessToken: ''
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
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(user && user.isLoggedIn) {
      this.setState({isLoggedIn: true, accessToken: user.accessToken})
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
        console.log("accessToken: " + JSON.stringify(res.data.accessToken));

        sessionStorage.setItem('user', JSON.stringify({
          isLoggedIn: true,
          accessToken: res.data.accessToken
        }))
        this.storeCollector();
      })
    }

  render() {
    /**
     * After successful login redirect to Home Page
     */
    if (this.state.isLoggedIn) {
      return <Redirect to="/home" />
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
                (this.state.submitted && 'Please Wait...')
                || (!this.state.submitted && 'Login')
             }
            </Button>
          </form>
      </section>
    )
  }
}

export default LoginForm;