import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from "./Table";
import './Users.scss';


export default class Users extends React.Component {
  
  state = {
    hide: '',
    result: [],
    column_name: [
      { title: "Name", field: "name" },
      { title: "Email Address", field: "email" }
    ]
  }

  componentDidMount() {
    axios.get(`/api/get/user`)
      .then(res => {
        const result = res.data.recordset;
        const hide = 'hide';
        this.setState({ result });
        this.setState({ hide });
      })
  }

  render() {

    return (
        <div className="Users" style={{position: 'relative'}}>
          <CircularProgress 
              className={this.state.hide}
              color="secondary" 
              size={40}
              left={-20}
              top={10}
              status={'loading'}
              disableShrink={this.state.loading} />
          <Table col={this.state.column_name} data={this.state.result} />
        </div>
    )
  }
}

