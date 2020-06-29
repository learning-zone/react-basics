import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import axios from 'axios';
import './UserForm.scss';

export default class UserForm extends React.Component {
    state = {
        formData: {
            email: '',
            name: '',
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ 
                formData: {
                    email: '',
                    name: '',
                },
                submitted: false
             }), 5000);
        });

        /**
         * POST REQUEST
         */
        const { formData } = this.state;
        console.log(formData);
        axios.post(`/api/post/user`, { formData })
      .then(res => {
          const result = res.data.recordset;
          this.setState({ result });
        console.log(res);
        console.log(res.data);
      })
    }

    render() {
        const { formData, submitted } = this.state;
        return (
        <div className="UserForm">
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h2>User Form</h2>
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <TextValidator
                    label="Name"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br /><br /><br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>
         </div>
        );
    }
}
