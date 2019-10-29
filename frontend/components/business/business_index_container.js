import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses } from '../../actions/business_actions';
import { changeFilter, updateFilter } from '../../actions/filter_actions';
import { getSearchedBusinesses } from '../../actions/search_actions';

const mapStateToProps = state => ({
    businesses: Object.values(state.entities.businesses),
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => {
    return ({
        fetchBusinesses: () => dispatch(fetchBusinesses()),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
        getSearchedBusinesses: (input) => dispatch(getSearchedBusinesses(input))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BusinessIndex);