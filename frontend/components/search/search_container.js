import Search from './search';
import { selectAllBusinesses } from '../../reducers/selectors';
import { fetchBusinesses } from '../../action/business_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    businesses: selectAllBusinesses(state)
})

const mapDispatchToProps = () => ({
    fetchBusinesses: () => dispatch(fetchBusinesses())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);