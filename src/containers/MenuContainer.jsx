import { connect } from 'react-redux';
import Menu from '../components/Menu.jsx';
import { setupNewGame, toggleMenu } from '../actions/game.js';
import { removeAllDisks } from '../actions/towers.js';

const mapStateToProps = state => ({
  game: state.game
});

const mapActionsToProps = ({
  setupNewGame,
  toggleMenu,
  removeAllDisks
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Menu);
