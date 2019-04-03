import React, { Component } from 'react';
import Tower from './Tower.jsx';
import Disk from './Disk.jsx';

class GameContainer extends Component {
  state = {
    leftTowerDisks: [],
    middleTowerDisks: [],
    rightTowerDisks: []
  }
  canDrag = (diskId) => {
    if (this.state.leftTowerDisks.length > 0
      && this.state.leftTowerDisks.slice(-1)[0].id == diskId) {
      return true;
    }
    if (this.state.middleTowerDisks.length > 0
      && this.state.middleTowerDisks.slice(-1)[0].id === diskId) {
      return true;
    }
    if (this.state.rightTowerDisks.length > 0
      && this.state.rightTowerDisks.slice(-1)[0].id === diskId) {
      return true;
    }
    return false;
  }
  addDisk = (diskId, towerId) => {
    switch (towerId) {
      case 1:
        this.setState({
          leftTowerDisks: [ ...this.state.leftTowerDisks, {
            id: diskId,
            component: <Disk size={diskId} key={diskId} id={diskId} canDrag={this.canDrag} />
          }]
        });
        break;
      case 2:
        this.setState({
          middleTowerDisks: [ ...this.state.middleTowerDisks, {
            id: diskId,
            component: <Disk size={diskId} key={diskId} id={diskId} canDrag={this.canDrag} />
          }]
        });
        break;
      case 3:
        this.setState({
          rightTowerDisks: [ ...this.state.rightTowerDisks, {
            id: diskId,
            component: <Disk size={diskId} key={diskId} id={diskId} canDrag={this.canDrag} />
          }]
        });
        break;
      default:
        return;
    }
  }
  transferDisk = (diskId, towerId) => {
    this.setState(state => {
      const leftTowerDisks = state.leftTowerDisks.filter((item) => diskId !== item.id);
      const middleTowerDisks = state.middleTowerDisks.filter((item) => diskId !== item.id);
      const rightTowerDisks = state.rightTowerDisks.filter((item) => diskId !== item.id);
      return {
        leftTowerDisks, middleTowerDisks, rightTowerDisks
      };
    })
    this.addDisk(diskId, towerId);
  }
  handleDrop = (diskId, towerId) => {
    this.transferDisk(diskId, towerId);
  }
  canDrop = (diskId, towerId) => {
    switch (towerId) {
      case 1:
        if (this.state.leftTowerDisks.length > 0
          && this.state.leftTowerDisks.slice(-1)[0].id < diskId) {
          return false;
        }
        return true;
      case 2:
        if (this.state.middleTowerDisks.length > 0
          && this.state.middleTowerDisks.slice(-1)[0].id < diskId) {
          return false;
        }
        return true;
      case 3:
        if (this.state.rightTowerDisks.length > 0
          && this.state.rightTowerDisks.slice(-1)[0].id < diskId) {
          return false;
        }
        return true;
      default:
        return true;
    }
  }
  componentDidMount = () => {
    const totalDisks = 8;
    for (let numDisk = totalDisks; numDisk >= 1; numDisk--) {
      this.state.leftTowerDisks.push(
        { id: numDisk,
          component: <Disk id={numDisk} size={numDisk} key={numDisk} canDrag={this.canDrag} />
        }
      );
    }
  }
  render() {
    return (
      <div className="app-body">
        <Tower
          id={1}
          disks={this.state.leftTowerDisks}
          handleDrop={this.handleDrop}
          canDrop={this.canDrop}
        />
        <Tower
          id={2}
          disks={this.state.middleTowerDisks}
          handleDrop={this.handleDrop}
          canDrop={this.canDrop}
        />
        <Tower
          id={3}
          disks={this.state.rightTowerDisks}
          handleDrop={this.handleDrop}
          canDrop={this.canDrop}
        />
      </div>
    );
  }
}

export default GameContainer;
