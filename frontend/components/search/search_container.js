import Search from './search';
import { selectAllBusinesses } from '../../reducers/selectors';
import { fetchBusinesses } from '../../action/business_actions';
import { connect } from 'react-redux';
import { updateBounds, updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => ({
    businesses: selectAllBusinesses(state),
    bounds: state.filters.bounds
})

const mapDispatchToProps = () => ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    updateBounds: (filter, value) => dispatch(updateBounds(filter, value)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);