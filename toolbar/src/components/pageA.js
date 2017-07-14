import React, { Component } from 'react';

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
          <h1>loading...</h1>
        </div>
      );
    } else {
      return(
        <div>
          <h1>page A rendered</h1>
          <h2>Information from API call:</h2>
          {
            data.map( (obj, i) => {
              return (<p key={i}>{obj.name}</p>);
            })
          }
        </div>
      );
    }
  }
}

export default PageA;
