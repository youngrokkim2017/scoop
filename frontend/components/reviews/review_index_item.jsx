import React from 'react';
// import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { review, currentUser } = this.props

        return (
            <div>
                <div className="review-contents">
                    <div className="business-review-author">
                        <div>
                            <span>{`${review.authorFirstName} ${review.authorFirstName}.`}</span>
                        </div>
                    </div>
                    
                    <div className="business-review-text">
                        <div>
                            <div className="rating-and-date">
                                <span>{`${review.rating}`}</span>
                                <span style={{ fontSize: '15px', color: 'gray'}}>{`${month}/${day}/${year}`}</span>
                            </div>

                            <div className="review-body">
                                <span style={{ fontSize: '15px', color: 'gray' }}>{review.body}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewIndexItem;