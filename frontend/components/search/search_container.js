import Search from './search';
import { connect } from 'react-redux';
import { changeFilter, updateFilter } from '../../actions/filter_actions';
import { getSearchedBusinesses } from '../../actions/search_actions';

// const mapStateToProps = (state) => {
//     // let search = Object.values(state.search)
    
//     // return {
//     //     search,
//     //     find: state.updateFilter.find,
//     //     near: state.updateFilter.near
//     // }
// };

// const mapStateToProps = (state, ownProps) => ({
//     searchTerm: state.searchTerm  // ownProps.match.params.searchTerm
// });

const mapDispatchToProps = (dispatch) => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    getSearchedBusinesses: (input) => dispatch(getSearchedBusinesses(input))
});

export default connect(
    // mapStateToProps,
    null,
    mapDispatchToProps
)(Search);