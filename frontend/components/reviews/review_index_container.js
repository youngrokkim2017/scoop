import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
// const mapStateToProps = (state, ownProps) => {
    let reviews = Object.values(state.entities.reviews)
    // let user = state.entities.users[ownProps.match.params.id]

    return {
        reviews,
        // user
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    deleteReview: (review) => dispatch(deleteReview(review))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewIndex);