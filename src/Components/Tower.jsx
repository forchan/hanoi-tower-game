import React, { Component } from 'react';

class Tower extends Component {
  render() {
    const disks = this.props.children.map((disk) => {
      return disk;
    });
    disks.reverse();

    return (
      <div className="tower">
        {disks}
      </div>
    );
  }
}

export default Tower;
