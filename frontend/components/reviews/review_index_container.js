import { connect } from 'react-redux';
import ReviewIndex from './review_index';

const mapStateToProps = (state) => {
    let reviews = Object.values(state.entities.reviews)

    return (
        reviews
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    deleteReview: (review) => dispatch(deleteReview(review))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewIndex);