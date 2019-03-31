import React, { Component } from 'react';

class Disk extends Component {
  render() {
    const diskSize = 'disk' + this.props.size;

    return (
      <div className={'disk ' + diskSize} />
    );
  }
}

export default Disk;
