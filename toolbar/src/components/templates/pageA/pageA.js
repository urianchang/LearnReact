import React, { Component } from 'react';
import './pageA.css';

class PageA extends Component {
  constructor() {
    super();
    this.state = {
      info: null
    };
  }
  //: Need to change this. Perform API call in componentDidMount method to prevent setState() error for a component not yet mounted
  componentWillMount() {
    // console.log("page A will mount");
    const URL = "http://localhost:3002/people";
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({ info: json });
      });
  }

  // componentDidMount() {
  //   console.log("page A did mount");
  // }

  // componentWillUnmount() {
  //   console.log("page A will unmount");
  // }

  render() {
    const data = this.state.info;
    // console.log(data);
    if (!data) {
      return(
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return(
        <div>
          <h1>All Users</h1>
          <table>
            <tbody>
              <tr>
                <th>Mongo ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>E-mail</th>
              </tr>
              {
                data.map( (obj, i) => {
                  return (
                    <tr key={i}>
                      <td>{obj._id}</td>
                      <td>{obj.metadata.first_name}</td>
                      <td>{obj.metadata.last_name}</td>
                      <td>{obj.email}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default PageA;
