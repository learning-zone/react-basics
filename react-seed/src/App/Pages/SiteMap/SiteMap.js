import React, { Component } from 'react';
import axios from 'axios';
import Table from "./Table";


export default class SiteMap extends React.Component {
  state = {
    result: [],
    column_name: [
      { title: "Name", field: "Sitename" },
      { title: "Undecorated Name", field: "UndecoratedSitename" },
      { title: "URL", field: "SiteURL" },
      { title: "Date", field: "ModificationTime" }
    ]
  }

  componentDidMount() {
    axios.get(`/api/sitename`)
      .then(res => {
        const result = res.data.recordset;
        this.setState({ result });
      })
  }

  render() {
    return (
     <div className="SiteMap">
      <Table col={this.state.column_name} data={this.state.result} />
     </div>
    )
  }
}

