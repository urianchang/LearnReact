import React, { Component } from 'react';
import PageA from './pageA';

class MainContent extends Component {

  render() {
    const currentPage = this.props.currentPage;
    switch (currentPage) {
      case "Home":
        return (
          <div>
            <h1>hello world</h1>
            <h2>home page rendered</h2>
          </div>
        );

      case "A":
        return (<PageA />);

      case "B":
        return (
          <div>
            <h1>Page B loaded</h1>
          </div>
        );

      case "C":
        return (
          <div>
            <h1>Page C loaded</h1>
          </div>
        );

      case "hello":
        return (
          <div>
            <h1>hello there! My name is Urian</h1>
          </div>
        );

      case "bye":
        return (
          <div>
            <h1>Is this good-bye?</h1>
          </div>
        );

      default:
        return(
          <div>
            <h1>oops...something went wrong.</h1>
          </div>
        );
    } //: end switch
  } //: end render
}

export default MainContent;
