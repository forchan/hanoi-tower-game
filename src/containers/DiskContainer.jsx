import { connect } from 'react-redux';
import Disk from '../components/Disk.jsx';
import { canDragDiskFromTower } from '../utils/GameUtils.js';

const mapStateToProps = (state) => ({
  towers: state.towers,
  canDragDiskFromTower
});

export default connect(
  mapStateToProps
)(Disk);
