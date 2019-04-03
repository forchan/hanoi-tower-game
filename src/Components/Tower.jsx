import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd'
import { DISK } from '../Constants/Constants.js'

const defaultProps = {
  disks: []
};

const propTypes = {
  disks: PropTypes.array
};

const Tower = ({ disks, connectDropTarget, canDrop, isOver }) => {
  const disksToRender = [];
  disks.forEach((disk) => {
    disksToRender.push(disk.component);
  })
  return connectDropTarget(
    <div className="tower">
      {disksToRender}
    </div>
  );
}

Tower.defaultProps = defaultProps;
Tower.propTypes = propTypes;

const spec = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    props.handleDrop(item.id, props.id);
  },
  canDrop(props, monitor, component) {
    const item = monitor.getItem();
    return props.canDrop(item.id, props.id);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

export default DropTarget(DISK, spec, collect)(Tower);
