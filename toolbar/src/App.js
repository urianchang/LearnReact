import React, { Component } from 'react';
import ToolbarControl from './components/toolbarControl';
import MainContent from './components/mainContent';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      page: "Home",
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.navigate = this.navigate.bind(this);
    this.getDimensions = this.getDimensions.bind(this);
  }

  navigate(param1) {
    // console.log("changing page...", p);
    this.setState({ page: param1 });
  }

  getDimensions(e) {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    // console.log(`Dimensions: ${this.state.width} W x ${this.state.height} H`);
  }

  componentDidMount() {
    // console.log("app did mount");
    window.addEventListener('resize', this.getDimensions);
  }

  componentWillUnmount() {
    // console.log("app will unmount");
    window.removeEventListener('resize', this.getDimensions);
  }

  render() {
    const currentPage = this.state.page;
    const width = this.state.width;
    const isMobile = (width <= 440) ? true : false;
    return (
      <div className="App">
        <ToolbarControl navigateTo={this.navigate} currentPage={currentPage} isMobile={isMobile} />
        <MainContent className="body" currentPage={currentPage} />
      </div>
    );
  }
}


export default App;
