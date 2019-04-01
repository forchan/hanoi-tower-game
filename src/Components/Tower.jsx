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
  return (
    <div className="tower">
      {disks}
    </div>
  );
}

Tower.defaultProps = defaultProps;
Tower.propTypes = propTypes;

const spec = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    props.onDrop(item);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop()
  };
}

export default DropTarget(DISK, spec, collect)(Tower);
