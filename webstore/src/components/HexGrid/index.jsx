import React, { Component } from 'react';
import './hexGrid.css';
import duck from '../PatchCard/derpDuck.jpg';

class HexGrid extends Component {
  constructor() {
    super();
    this.state = {isHidden: "hidden"}
    this.showOverlay = this.showOverlay.bind(this);
    this.hideOverlay = this.hideOverlay.bind(this);
  }

  showOverlay() {
    this.setState({isHidden: ""})
  }

  hideOverlay() {
    this.setState({isHidden: "hidden"});
  }

  render() {
    return(
      <div className="hex-grid">
        <div
          className="hexagon-bg"
          onMouseEnter={this.showOverlay}
          onMouseLeave={this.hideOverlay}
          >
          <div className="hexagon">
            <img src={duck} alt="duck" />
            <h3 className={this.state.isHidden}>title</h3>
          </div>
        </div>
        <div
          className="hexagon-bg"
          onMouseEnter={this.showOverlay}
          onMouseLeave={this.hideOverlay}
          >
          <div className="hexagon">
            <img src={duck} alt="duck" />
            <h3 className={this.state.isHidden}>title</h3>
          </div>
        </div>
        <div
          className="hexagon-bg"
          onMouseEnter={this.showOverlay}
          onMouseLeave={this.hideOverlay}
          >
          <div className="hexagon">
            <img src={duck} alt="duck" />
            <h3 className={this.state.isHidden}>title</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default HexGrid;
