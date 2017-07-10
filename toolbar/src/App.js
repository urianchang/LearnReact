import React, { Component } from 'react';
import ToolbarControl from './components/toolbarControl';

const navbarLinks = ["A", "B", "C"];

class App extends Component {

  constructor() {
    super();
    this.state = {
      page: "home",
      links: navbarLinks
    };
    this.navigate = this.navigate.bind(this);
  }

  navigate(p) {
    // console.log("changing page...", p);
    this.setState({ page: p });
  }

  render() {
    let shownPage = this.state.page;
    let links = this.state.links;
    return (
      <div className="App">
        <ToolbarControl navigateTo={this.navigate} links={links} />
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
  if (shownPage === "A") {
    return (
      <div>
        <h1>Page A loaded</h1>
      </div>
    );
  }
  if (shownPage === "B") {
    return (
      <div>
        <h1>Page B loaded</h1>
      </div>
    );
  }
  if (shownPage === "C") {
    return (
      <div>
        <h1>Page C loaded</h1>
      </div>
    );
  }
}


export default App;
