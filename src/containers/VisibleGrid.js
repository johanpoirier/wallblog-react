import { connect } from 'react-redux'
import Grid from '../components/Grid'

const getLastItems = items => {
  return items;
};

const mapStateToProps = state => {
  return {
    items: getLastItems(state.items)
  }
};

const mapDispatchToProps = dispatch => {
  return {};
};

const VisibleGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

export default VisibleGrid;
