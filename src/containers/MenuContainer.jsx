import { connect } from 'react-redux';
import Menu from '../components/Menu.jsx';
import { startNewGame } from '../actions/game.js';

const mapStateToProps = state => ({
  game: state.game
});

const mapActionsToProps = ({
  startNewGame
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Menu);
