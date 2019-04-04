import { connect } from 'react-redux';
import Tower from '../components/Tower.jsx';
import { transferDiskBetweenTowers } from '../actions/towers.js';

const mapStateToProps = (state) => ({
  // no state needed as of now
});

const mapActionsToProps = ({
  transferDiskBetweenTowers
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Tower);
