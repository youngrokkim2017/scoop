import { connect } from 'react-redux';
import BusinessIndex from './business_index';

const mapsStateToProps = state => {
    let businesses = Object.values(state.entities.businesses);
    return ({
        businesses
    })
}

const mapDispatchToProps = fetchBusinesses => {
    return ({
        fetchBusinesses: () => dispatchEvent(fetchBusinesses())
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BusinessIndex);