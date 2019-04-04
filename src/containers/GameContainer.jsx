import { connect } from 'react-redux';
import Game from '../components/Game.jsx';
import { addManyDisksToTower } from '../actions/towers.js';
import { setGameState } from '../actions/game.js';

const mapStateToProps = state => ({
  towers: state.towers,
  game: state.game
});

const mapActionsToProps = ({
  addManyDisksToTower,
  setGameState
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Game);
