import Search from './search';
import { connect } from 'react-redux';
import { changeFilter, updateFilter } from '../../actions/filter_actions';
import { getBusinesses } from '../../actions/search_actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    // updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    getBusinesses: (input) => dispatch(getBusinesses(input))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);