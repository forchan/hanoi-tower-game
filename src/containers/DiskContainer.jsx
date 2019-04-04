import { connect } from 'react-redux';
import Disk from '../components/Disk.jsx';

const mapStateToProps = (state) => ({
  towers: state.towers,
  game: state.game
});

export default connect(
  mapStateToProps
)(Disk);
