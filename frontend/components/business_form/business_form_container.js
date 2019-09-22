import { connect } from 'react-redux';
import { createBusiness } from '../../actions/business_actions';
import BusinessForm from './business_form';

const mapStateToProps = (state, { location }) => ({
    lat: new URLSearchParams(location.search).get("lat"),
    lng: new URLSearchParams(location.search).get("lng")
});

const mapDispatchToProps = dispatch => ({
    createBusiness: business => dispatch(createBusiness(businesses))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BusinessForm);