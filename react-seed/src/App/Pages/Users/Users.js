import React from 'react';
import axios from 'axios';
import Table from "./Table";


export default class Users extends React.Component {
  state = {
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
        this.setState({ result });
      })
  }

  render() {
    return (
     <div className="Users">
      <Table col={this.state.column_name} data={this.state.result} />
     </div>
    )
  }
}

