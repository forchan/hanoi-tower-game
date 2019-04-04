import { connect } from 'react-redux';
import Menu from '../components/Menu.jsx';
import { setupNewGame } from '../actions/game.js';
import { removeAllDisks } from '../actions/towers.js';

const mapStateToProps = state => ({
  game: state.game
});

const mapActionsToProps = ({
  setupNewGame,
  removeAllDisks
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Menu);
