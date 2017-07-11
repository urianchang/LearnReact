import React, { Component } from 'react';
import ToolbarControl from './components/toolbarControl';
import MainContent from './components/mainContent';

// const navbarLinks = ["A", "B", "C"];

class App extends Component {

  constructor() {
    super();
    this.state = {
      page: "home",
      // links: navbarLinks
    };
    this.navigate = this.navigate.bind(this);
  }

  navigate(param1) {
    // console.log("changing page...", p);
    this.setState({ page: param1 });
  }

  render() {
    let shownPage = this.state.page;
    // let links = this.state.links;
    return (
      <div className="App">
        <ToolbarControl navigateTo={this.navigate} />
        <MainContent shownPage={shownPage} />
      </div>
    );
  }
}


export default App;
