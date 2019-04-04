import { connect } from 'react-redux';
import Tower from '../components/Tower.jsx';
import { transferDiskBetweenTowers } from '../actions/towers.js';
import { setGameState } from '../actions/game.js';

const mapStateToProps = (state) => ({
  towers: state.towers,
  game: state.game
});

const mapActionsToProps = ({
  transferDiskBetweenTowers,
  setGameState
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Tower);
