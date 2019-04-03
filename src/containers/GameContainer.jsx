import { connect } from 'react-redux';
import Game from '../components/Game.jsx';
import { addManyDisksToTower } from '../actions/towers.js';

const mapStateToProps = state => ({
  towers: state.towers,
});

const mapActionsToProps = ({
  addManyDisksToTower
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Game);
