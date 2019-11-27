import Search from './search';
import { connect } from 'react-redux';
import { changeFilter, updateFilter } from '../../actions/filter_actions';
import { getSearchedBusinesses } from '../../actions/search_actions';
import { fetchBusinesses } from '../../actions/business_actions';


// const mapStateToProps = (state, ownProps) => ({
//     searchTerm: state.searchTerm  // ownProps.match.params.searchTerm
// });

// const mapStateToProps = (state) => {
//     let searchedBusinesses = Object.value(state.searchedBusinesses)

//     return {
//         searchedBusinesses,
//         find: state.filter.find,
//         near: state.filter.near
//     }
// }

const mapStateToProps = (state) => ({
    businesses: Object.values(state.entities.businesses)
});

const mapDispatchToProps = (dispatch) => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    getSearchedBusinesses: (input) => dispatch(getSearchedBusinesses(input)),
    fetchBusinesses: () => dispatch(fetchBusinesses()),
});

export default connect(
    mapStateToProps,
    // null,
    mapDispatchToProps
)(Search);