import { connect } from 'react-redux';
import Tower from '../components/Tower.jsx';
import { transferDiskBetweenTowers } from '../actions/towers.js';
import { setGameState, incrementMoves } from '../actions/game.js';

const mapStateToProps = (state) => ({
  towers: state.towers,
  game: state.game
});

const mapActionsToProps = ({
  transferDiskBetweenTowers,
  setGameState,
  incrementMoves
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Tower);
