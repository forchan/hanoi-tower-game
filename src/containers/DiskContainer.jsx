import { connect } from 'react-redux';
import Disk from '../components/Disk.jsx';

const mapStateToProps = (state) => ({
  towers: state.towers
});

export default connect(
  mapStateToProps
)(Disk);
