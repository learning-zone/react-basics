import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './LoginForm.scss';


class LoginForm extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      currentView: "signUp",
      formData: {
        email: '',
        renpassword: '',
        password: '',
      },
      submitted: false
    }
  }
  
  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
    //console.log(JSON.stringify(formData));
  }

  handleSubmit = (e) => {
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
    axios.post(`/api/auth/signup`, { formData })
      .then(res => {
          const result = res.data.recordset;
          this.setState({ result });
        console.log(res);
        console.log(res.data);
      })
    }

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (

          <form 
                noValidate 
                autoComplete="off" 
                onSubmit={this.handleSubmit}
                method="post">
            <h2>Sign Up! <hr/></h2>
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
              <TextField 
                  label="Re-Enter Password" 
                  variant="outlined" 
                  className="login-input-box" 
                  type="password" 
                  onChange={this.handleChange}
                  name="renpassword"
                  value={this.state.formData.renpassword || ""}
                  
              />
            </fieldset>
            <Button 
                  variant="contained"
                  type="submit"
                  disabled={this.state.submitted}
            >{
                (this.state.submitted && 'Your form is submitted!')
                || (!this.state.submitted && 'Submit')
             }
            </Button>
            <Button variant="contained" onClick={ () => this.changeView("logIn")}>Have an Account?</Button>
          </form>
        )
      case "logIn":
        return (
          <form>
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
              <ul>
                <li>
                  <i/>
                  <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <Button variant="contained">Login</Button>
            <Button variant="contained" onClick={ () => this.changeView("signUp")}>Create an Account</Button>
          </form>
        )
      case "PWReset":
        return (
          <form>
          <h2>Reset Password <hr/></h2>
          <fieldset>
            <ul>
              <li>
                <em>A reset link will be sent to your inbox!</em>
              </li>
            </ul>
            <TextField 
                  label="Email" 
                  variant="outlined" 
                  className="login-input-box"
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.formData.email || ""}
            />
          </fieldset>
          <Button variant="contained">Send Reset Link</Button>
          <Button variant="contained" onClick={ () => this.changeView("logIn")}>Go Back</Button>
        </form>
        )
      default:
        break
    }
  }


  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}

export default LoginForm;