import React, { Component } from 'react';
import Tower from './Tower.jsx';
import { TOWERS } from '../Constants/Constants.js'

class GameContainer extends Component {
  render() {
    return (
      <div className="app-body">
        {TOWERS.map((tower, index) => {
          return (
            <Tower key={index} />
          );
        })}
      </div>
    );
  }
}

export default GameContainer;
