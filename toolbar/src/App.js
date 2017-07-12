import React, { Component } from 'react';
import ToolbarControl from './components/toolbarControl';
import MainContent from './components/mainContent';

// const navbarLinks = ["A", "B", "C"];

class App extends Component {

  constructor() {
    super();
    this.state = {
      page: "Home",
      // links: navbarLinks
    };
    this.navigate = this.navigate.bind(this);
  }

  navigate(param1) {
    // console.log("changing page...", p);
    this.setState({ page: param1 });
  }

  render() {
    let currentPage = this.state.page;
    // let links = this.state.links;
    console.log(window.innerWidth);   //: User innerWidth to find browser window size
    return (
      <div className="App">
        <ToolbarControl navigateTo={this.navigate} currentPage={currentPage} />
        <MainContent currentPage={currentPage} />
      </div>
    );
  }
}


export default App;
