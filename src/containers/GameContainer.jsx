import { connect } from 'react-redux';
import Game from '../components/Game.jsx';
import { addManyDisksToTower } from '../actions/towers.js';
import { toggleMenu, setGameState } from '../actions/game.js';

const mapStateToProps = state => ({
  towers: state.towers,
  game: state.game
});

const mapActionsToProps = ({
  addManyDisksToTower,
  toggleMenu,
  setGameState
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Game);
