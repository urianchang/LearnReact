import React, { Component } from 'react';
import './pageA.css';

class PageA extends Component {
  constructor() {
    super();
    this.state = {
      info: null
    };
  }

  componentWillMount() {
    // console.log("page A will mount");
    const URL = "http://localhost:3002";
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
    console.log(data);
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
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
            {
              data.map( (obj, i) => {
                return (
                  <tr key={i}>
                    <td>{obj._id}</td>
                    <td>{obj.name}</td>
                  </tr>
                );
              })
            }
          </table>
        </div>
      );
    }
  }
}

export default PageA;
