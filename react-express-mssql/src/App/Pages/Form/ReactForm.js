import React from 'react';
import axios from "axios"; 
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Alert from '@material-ui/lab/Alert';
import './ReactForm.scss';


export default class ReactForm extends React.Component {
    state = {
        hide: 'hide',
        formData: {
            name: '',
            email: '',
        },
        submitted: false,
    };

    componentDidMount() {
         // custom rule will have name 'isPasswordMatch'
         ValidatorForm.addValidationRule('name', (value) => {
          if (value === '') {
              return false;
          }
          return true;
      });
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        if (event.target.name === '') {
          this.form.isFormValid(false);
        }
      
        this.setState({ formData });
    }

    /**
     * Submit Button
     * @param {} event 
     */
    handleSubmit = (event) => {
      const { formData } = this.state;
      formData[event.target.name] = event.target.value;

      this.setState({ submitted: true }, () => {
          setTimeout(() => this.setState({ submitted: false }), 5000);
      });
      /**
       * Form Submission
       */
      event.preventDefault();
      const userDetails = {
        name: this.state.formData.name,
        email: this.state.formData.email
      }
      axios.post('api/post/user', { userDetails })
      .then(res => {
        console.log('Response Status: ' + res.status);
        console.log('Response StatusText: ' + res.statusText);

        const hide = '';
        this.setState({ hide });

      }, (error) => {
        console.log('React Error: ' + error);
      });
      
      this.setState({
        formData: {
            name: '',
            email: '',
        }
      });
    }

    handleClose = () => {
      const hide = 'hide';
      this.setState({ hide });
    };

    render() {
        const { formData, submitted } = this.state;
        return (
          
          <div className="react-form">
            <Alert onClose={this.handleClose} className={this.state.hide}>Record Saved !</Alert>
            <ValidatorForm
                ref={r => (this.form = r)}
                onSubmit={this.handleSubmit}
            >
                <h2>User React Form <hr/></h2><br/>
                <TextValidator className="react-form-input"
                    label="Name"
                    onChange={this.handleChange}
                    name="name"
                    type="text"
                    validators={['required']}
                    errorMessages={['This field is required']}
                    value={formData.name}
                />
                <br />
                <TextValidator className="react-form-input"
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    type="email"
                    validators={['required']}
                    errorMessages={['This field is required']}
                    value={formData.email}
                />
                <br />
                <Button
                    color="secondary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Save')
                    }
                </Button>
            </ValidatorForm>
          </div>
        );
    }
}