import Search from './search';
// import { selectAllBusinesses } from '../../reducers/selectors';
// import { fetchBusinesses } from '../../action/business_actions';
import { connect } from 'react-redux';
import { changeFilter, updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => ({
    // businesses: selectAllBusinesses(state),
    // bounds: state.filters.bounds
    find: state.filters.find,
    near: state.filters.near
});

const mapDispatchToProps = (dispatch) => ({
    // fetchBusinesses: () => dispatch(fetchBusinesses()),
    // changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);