import React, { Component } from 'react';
import './patchcard.css';
import imagePlaceholder from './derpDuck.jpg';

class PatchCard extends Component {
  //: Constructor in case of adding method(s) of retrieving patch images
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="card-container">
        <p className="card-title">{ this.props.title }</p>
        <img className="card-image" src={ imagePlaceholder } alt="duck thing" />
        <p className="card-description">{ this.props.description }</p>
      </div>
    );
  }

}

export default PatchCard;
