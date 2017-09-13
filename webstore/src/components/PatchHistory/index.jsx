import React, { Component } from 'react';
import PatchCard from '../PatchCard';

class PatchHistory extends Component {
  render() {
    return(
      <div>
        <h2>History of Patches</h2>
        <PatchCard />
      </div>
    );
  }
}

export default PatchHistory;
