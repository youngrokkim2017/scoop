import Search from './search';
import { connect } from 'react-redux';
import { changeFilter, updateFilter } from '../../actions/filter_actions';
import { getBusinesses } from '../../actions/search_actions';

// const mapStateToProps = (state) => {
//     // let search = Object.values(state.search)
    
//     // return {
//     //     search,
//     //     find: state.filter.find,
//     //     near: state.filter.near
//     // }
// };

// const mapStateToProps = (state, ownProps) => ({
//     searchTerm: ownProps.match.params.searchTerm
// });

const mapDispatchToProps = (dispatch) => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    getBusinesses: (input) => dispatch(getBusinesses(input))
});

export default connect(
    // mapStateToProps,
    null,
    mapDispatchToProps
)(Search);