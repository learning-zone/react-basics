import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './LoginForm.scss';


class LoginForm extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      currentView: "signUp"
    }
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

          <form noValidate autoComplete="off">
            <h2>Sign Up! <hr/></h2>
            <fieldset>
              <TextField label="Email" variant="outlined" className="login-input-box" />
              <TextField label="Password" variant="outlined" className="login-input-box" type="password" />
              <TextField label="Re-Enter Password" variant="outlined" className="login-input-box" type="password" />
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
        )
        break
      case "logIn":
        return (
          <form>
            <h2>Log In <hr/></h2>
            <fieldset>
              <TextField label="Username" variant="outlined" className="login-input-box" />
              <TextField label="Password" variant="outlined" className="login-input-box" type="password" />
              <ul>
                <li>
                  <i/>
                  <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
          </form>
        )
        break
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
            <TextField label="Email" variant="outlined" className="login-input-box" />
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
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