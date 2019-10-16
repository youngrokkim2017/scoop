// Phase 13: Reviews
// Show reviews of a bench on BenchShow.Reviews for a bench should comprise:

//     A rating from 1 to 5.
// A comment field.
// Add a ReviewIndex and ReviewForm.ReviewIndex should show the average score for
//  a bench and also list the reviews for that bench.Modify and add the 
//  appropriate API endpoints, actions, reducers, utils, and components.
 

import React from 'react';
import ReviewIndexItem from './review_index_item';
 
class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.business.id)
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.reviews.length !== this.prevProps.reviews.length) {
    //         this.props.fetchReviews(this.props.business.id)
    //     }
    // }

    render() {
        // const reviews = this.props.reviews;

        let { reviews } = this.props;

        const allReviews = this.props.reviews.reverse().map(review => {
            return (
                <ReviewIndexItem 
                    key={review.id}
                    review={review}
                    fetchReviews={this.props.fetchReviews}
                    currentUser={this.props.currentUser}
                    businessId={this.props.business.id}
                />
            )
        })


        return (
            <div>
                <div className="reviews-index">
                    {allReviews}
                </div>
                {/* <div className="review-profile">
                    <span>{`${reviews.firstName} ${reviews.lastName}`}</span>
                </div>

                <div className="review-content">
                    <span>{review.rating}</span>
                    <span>{reviews.body}</span>
                </div> */}
            </div>
        );
    }
}

export default ReviewIndex;


// const Review = props => {
//     const { deleteReview, id, review, business, key, currretUser } = props

//     const checkUser = () => {
//         if (!currretUser) return;

//         if (furrentUser === review.userId) {
//             return (
//                 <i
//                     onClick={() => { deleteReview(id) }}
//                 />
//             );
//         }
//         return "";
//     }

//     const getDate = () => {

//     }
// }