import React, { Component } from 'react';
import PatchCard from '../PatchCard';

class PatchList extends Component {
  constructor() {
    super();
    this.eachCard = this.eachCard.bind(this);
  }

  eachCard(params, i) {
    return(
      <PatchCard
        key={i}
        title={params.title}
        description={params.description}
      />
    );
  }

  render() {
    let patchList = [
      {
        title: "patch 1",
        description: "first patch",
      },
      {
        title: "patch 2",
        description: "second patch",
      },
      {
        title: "patch 3",
        description: "third patch",
      },
    ];
    return(
      <div>
        <h2>History of Patches</h2>
        { patchList.map(this.eachCard) }
      </div>
    );
  }
}

export default PatchList;
