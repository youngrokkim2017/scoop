// Phase 13: Reviews
// Show reviews of a bench on BenchShow.Reviews for a bench should comprise:

//     A rating from 1 to 5.
// A comment field.
// Add a ReviewIndex and ReviewForm.ReviewIndex should show the average score for
//  a bench and also list the reviews for that bench.Modify and add the 
//  appropriate API endpoints, actions, reducers, utils, and components.
 

 import React from 'react';

 export default class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.business.id)
    }

    render() {
        const reviews = this.props.reviews;

        return (
            <div>
                <span>{reviews.firstName}</span>
                <span>{reviews.body}</span>
            </div>
        );
    }
 }