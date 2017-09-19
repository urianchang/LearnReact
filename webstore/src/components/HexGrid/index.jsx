import React, { Component } from 'react';
import './hexGrid.css';

class HexGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="hex-grid">
        <div className="hexagon-bg">
          <div className="hexagon">
            <h3>title</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default HexGrid;
