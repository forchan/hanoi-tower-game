import { connect } from 'react-redux';
import Tower from '../components/Tower.jsx';
import { canDropDiskToTower } from '../utils/GameUtils.js';
import { transferDiskBetweenTowers } from '../actions/towers.js';

const mapStateToProps = (state) => ({
  canDropDiskToTower
});

const mapActionsToProps = ({
  transferDiskBetweenTowers
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Tower);
