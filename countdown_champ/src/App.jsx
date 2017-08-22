import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ""
    };
    this.changeDeadline = this.changeDeadline.bind(this)
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return(
      <div className="App">
        <div className="App-title">Countdown to { this.state.deadline }</div>
        <div>
          <div className='Clock-days'>days</div>
          <div className='Clock-hours'>hours</div>
          <div className='Clock-minutes'>minutes</div>
          <div className='Clock-seconds'>seconds</div>
        </div>
        <div>
          <input
            onChange={ event => this.setState({ newDeadline: event.target.value }) }
            placeholder='new date'
          />
          <button onClick={ this.changeDeadline }>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
