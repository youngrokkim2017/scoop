import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usefulClick: this.props.usefulClick || 0,
            funnyClick: this.props.funnyClick || 0,
            coolClick: this.props.coolClick || 0,
            showUseful: this.props.showCool || true,
            showFunny: this.props.showFunny || true,
            showCool: this.props.showCool || true
        };

        this.incrementUseful = this.incrementUseful.bind(this);
        this.incrementFunny = this.incrementFunny.bind(this);
        this.incrementCool = this.incrementCool.bind(this);
        this.toggleUsefulClick = this.toggleUsefulClick.bind(this);
        this.toggleFunnyClick = this.toggleFunnyClick.bind(this);
        this.toggleCoolClick = this.toggleCoolClick.bind(this);
    }

    incrementUseful() {
        this.setState(
            { usefulClick: this.state.usefulClick + 1 }
        );
    }
    
    incrementFunny() {
        this.setState(
            { funnyClick: this.state.funnyClick + 1 }
        );
    }
    
    incrementCool() {
        this.setState(
            { coolClick: this.state.coolClick + 1 }
        );
    }

    toggleUsefulClick() {
        this.setState(
            { showUseful: !this.state.showUseful }
        );
    }

    toggleFunnyClick() {
        this.setState(
            { showFunny: !this.state.showFunny }
        );
    }

    toggleCoolClick() {
        this.setState(
            { showCool: !this.state.showCool }
        );
    }

    render() {
        // let { review, currentUser } = this.props;
        let { review, currentUser } = this.props;

        // console.log(review.rating);

        let starRatingsList = ["*", "**", "***", "****", "*****"];

        let starRating;
        starRating = starRatingsList[review.rating - 1];
        // if (review.rating === 1) {
        //     starRating = starRatingsList[0]
        // } else if (review.rating === 2) {
        //     starRating = starRatingsList[1]
        // } else if (review.rating === 3) {
        //     starRating = starRatingsList[2]
        // } else if (review.rating === 4) {
        //     starRating = starRatingsList[3]
        // } else if (review.rating === 5) {
        //     starRating = starRatingsList[4]
        // }

        // console.log(starRating);

        // console.log(this.props.review.authorId);

        return (

            <div>
                <div className="review-contents">
                    <div className="business-review-author">
                        <div className="author-photo">
                            {/* <img src={user.photoUrl} alt=""/> */}
                            {/* <img src={this.props.review.authorId.photoUrl} alt=""/> */}
                        </div>
                        <div>
                            <span style={{ color: 'royalblue' }}>{`${review.authorFirstName} ${review.authorLastName[0]}.`}</span>
                        </div>

                        <div className="edit-review-link-hover">
                            { currentUser && currentUser.id === review.authorId ?
                                <Link
                                    className="edit-review-link"
                                    to={`/businesses/${review.businessId}/reviews/${review.id}/edit`}
                                >
                                    Edit Review
                                </Link>

                                :

                                ""
                            }
                        </div>
                    </div>
                    
                    <div className="business-review-text">
                        <div>
                            <div className="rating-and-date">
                                {/* <span style={{ color: 'gray' }}>{`${review.rating}`}</span> */}
                                <span style={{ color: 'gray' }}>{starRating}</span>
                                {/* <span style={{ fontSize: '15px', color: 'gray'}}>{`${month}/${day}/${year}`}</span> */}
                            </div>

                            <div className="review-body">
                                {/* <span style={{ fontSize: '15px', color: 'gray' }}>{review.body}</span> */}
                                <span>{review.body}</span>
                            </div>

                            <div className="review-reactions">
                                <div className="review-reaction-question">
                                    <span>Was this review ...?</span>
                                </div>
                                <div className="review-reaction-options">
                                    {/* <span>💡Useful</span>
                                    <span>😀Funny</span>
                                    <span>😎Cool</span> */}

                                    <div className="reaction">
                                        <button className="reaction-buttons" onClick={this.incrementUseful}>💡Useful {this.state.showUseful ? this.state.usefulClick : "" }</button>
                                    </div>

                                    <div className="reaction">
                                        <button className="reaction-buttons" onClick={this.incrementFunny}>😀Funny {this.state.showFunny ? this.state.funnyClick : ""}</button>
                                    </div>

                                    <div className="reaction">
                                        <button className="reaction-buttons" onClick={this.incrementCool}>😎Cool {this.state.showCool ? this.state.coolClick : ""}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewIndexItem;