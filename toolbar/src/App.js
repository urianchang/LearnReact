import React, { Component } from 'react';
import ToolbarControl from './components/toolbarControl';

class App extends Component {

  constructor() {
    super();
    this.state = {page: "home"};
    this.navigate = this.navigate.bind(this);
  }

  navigate() {
    console.log("changing page...");
    // this.setState({ page: param1 });
  }

  render() {
    let shownPage = this.state.page;
    return (
      <div className="App">
        <ToolbarControl navigateTo={this.navigate} />
        <MainContent shownPage={shownPage} />
      </div>
    );
  }
}

function MainContent(props) {
  const shownPage = props.shownPage;
  if (shownPage === "home") {
    return (
      <div>
        <h1>hello world</h1>
        <h2>home page rendered</h2>
      </div>
    );
  }
}


export default App;
