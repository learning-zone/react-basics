import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

class UserDetails extends React.Component {
    state = {
        Results: [],
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Email', field: 'email' }
        ]
    }

    componentDidMount() {
      let user = JSON.parse(sessionStorage.getItem('login'));
      const token = user.store;

      axios.get(`/api/get/user`, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
          const Results = res.data.recordsets;
          this.setState({ Results });
        })
    }

  render() {
    return (
      <div style={{ maxWidth: '100%', padding: '50px' }}>
        <MaterialTable
          columns={this.state.columns}
          data={this.state.Results}
          title="User Details"
        />
      </div>
    )
  }
}
export default UserDetails;
