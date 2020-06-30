import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);
        let loggedIn = false;
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    
    /**
     * ON Change function
     * @param {event} e 
     */
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    /**
     * Submit Form
     * @param {event} e 
     */
    submitForm(e) {
        e.preventDefault();
        const { username, password } = this.state;

        if(username === "admin" && password === "admin") {
            localStorage.setItem("token", "secretkey");
            this.setState({
                loggedIn: true
            })
        } else {
            alert('Invalid username or password !');
        }
    }
    render() {
        if(this.state.loggedIn) {
            return <Redirect to="/admin" />
        }
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.submitForm}>
                    <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                    <br/>
                    <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                    <br/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
