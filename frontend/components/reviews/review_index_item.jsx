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
        this.decrementUseful = this.decrementUseful.bind(this);
        this.decrementFunny = this.decrementFunny.bind(this);
        this.decrementCool = this.decrementCool.bind(this);
        // this.toggleUsefulClick = this.toggleUsefulClick.bind(this);
        // this.toggleFunnyClick = this.toggleFunnyClick.bind(this);
        // this.toggleCoolClick = this.toggleCoolClick.bind(this);
    }

    incrementUseful() {
        this.setState(
            { usefulClick: this.state.usefulClick + 1 }
        );

        this.toggleUsefulClick();
        document.getElementById('useful').classList.add('reacted');
    }

    decrementUseful() {
        this.setState(
            { usefulClick: this.state.usefulClick - 1 }
        );

        this.toggleUsefulClick();
        document.getElementById('useful').classList.remove('reacted');
    }
    
    incrementFunny() {
        this.setState(
            { funnyClick: this.state.funnyClick + 1 }
        );

        this.toggleFunnyClick();
        document.getElementById('funny').classList.add('reacted');
    }

    decrementFunny() {
        this.setState(
            { funnyClick: this.state.funnyClick - 1 }
        );

        this.toggleFunnyClick();
        document.getElementById('funny').classList.remove('reacted');
    }
    
    incrementCool() {
        this.setState(
            { coolClick: this.state.coolClick + 1 }
        );

        this.toggleCoolClick();
        document.getElementById('cool').classList.add('reacted');
    }

    decrementCool() {
        this.setState(
            { coolClick: this.state.coolClick - 1 }
        );

        this.toggleCoolClick();
        document.getElementById('cool').classList.remove('reacted');
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

    showEdit(e) {
        let editLink = document.getElementById(`edit-review-link-${e.currentTarget.dataset.reviewId}`)
        let deleteLink = document.getElementById(`delete-review-link-${e.currentTarget.dataset.reviewId}`)

        if (editLink) editLink.classList.remove('hide')
        if (deleteLink) deleteLink.classList.remove('hide')
    }

    hideEdit(e) {
        let editLink = document.getElementById(`edit-review-link-${e.currentTarget.dataset.reviewId}`)
        let deleteLink = document.getElementById(`delete-review-link-${e.currentTarget.dataset.reviewId}`)

        if (editLink) editLink.classList.add('hide')
        if (deleteLink) deleteLink.classList.add('hide')
    }

    render() {
        // let { review, currentUser } = this.props;
        let { review, currentUser } = this.props;

        // let starRatingsList = ["*", "**", "***", "****", "*****"];
        let starRatingsList = [window.oneStar, window.twoStar, window.threeStar, window.fourStar, window.fiveStar];

        let starRating;
        starRating = starRatingsList[review.rating - 1];
        if (review.rating === 1) {
            starRating = starRatingsList[0]
        } else if (review.rating === 2) {
            starRating = starRatingsList[1]
        } else if (review.rating === 3) {
            starRating = starRatingsList[2]
        } else if (review.rating === 4) {
            starRating = starRatingsList[3]
        } else if (review.rating === 5) {
            starRating = starRatingsList[4]
        }

        let date = new Date(review.createdAt)
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        return (

            <div>
                <div className="review-contents">
                    <div 
                        className="business-review-author" 
                        data-review-id={review.id}
                        onMouseOver={this.showEdit}
                        onMouseOut={this.hideEdit}
                    >
                        <div className="author-photo">
                            <img src={this.props.review.authorPhotoUrl} alt="" />
                        </div>
                        <div className="review-user-info">
                            <div>
                                <span style={{ fontWeight: 'bold', color: 'royalblue' }}>{`${review.authorFirstName} ${review.authorLastName[0]}.`}</span>
                                {/* <span style={{ paddingBottom: '5px', borderBottom: '1px solid black', fontWeight: 'bold', color: 'royalblue' }}>{`${review.authorFirstName} ${review.authorLastName[0]}.`}</span> */}
                            </div>

                            {/* <div className="edit-review-link-hover"> */}
                            <div id="edit-review-link-hover">
                                { currentUser && currentUser.id === review.authorId ?
                                    <>
                                    <p>
                                    <Link
                                        className="hide edit-review-link"
                                        id={`edit-review-link-${review.id}`}
                                        to={`/businesses/${review.businessId}/reviews/${review.id}/edit`}
                                    >
                                        <img src={window.edit} alt=""/>
                                        <span>Edit Review</span> 
                                    </Link>
                                    </p>
                                    <p>
                                    <Link
                                        className="hide edit-review-link"
                                        id={`delete-review-link-${review.id}`}
                                        to={`/businesses/${review.businessId}/reviews/${review.id}/delete`}
                                    >
                                        <img src={window.delete} alt=""/>
                                        <span>Delete Review</span> 
                                    </Link>
                                    </p>
                                    </>
                                    :

                                    ""
                                }
                            </div>
                        </div>
                    </div>
                    
                    <div className="business-review-text">
                        <div className="review-text-content">
                            <div className="rating-and-date">
                                {/* <span style={{ color: 'gray' }}>{starRating}</span> */}
                                <div>
                                    <img src={starRating} alt=""/>
                                </div>
                                <div style={{ paddingTop: '5px', paddingLeft: '5px' }}>
                                    <span style={{ color: 'gray'}}>{`${month}/${day}/${year}`}</span>
                                </div>
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
                                        {/* <button className="reaction-buttons" onClick={this.incrementUseful}>💡Useful {this.state.showUseful ? this.state.usefulClick : ""}</button> */}
                                        {/* <button className="reaction-buttons" onClick={this.state.showUseful ? (this.incrementUseful, this.toggleUsefulClick) : this.decrementUseful}>💡Useful {this.state.usefulClick}</button> */}
                                        <button id="useful" className="reaction-buttons" onClick={this.state.showUseful ? this.incrementUseful : this.decrementUseful}>💡Useful {this.state.usefulClick}</button>
                                    </div>

                                    <div className="reaction">
                                        {/* <button className="reaction-buttons" onClick={this.incrementFunny}>😀Funny {this.state.showFunny ? this.state.funnyClick : ""}</button> */}
                                        <button id="funny" className="reaction-buttons" onClick={this.state.showFunny ? this.incrementFunny : this.decrementFunny}>😀Funny {this.state.funnyClick}</button>
                                    </div>

                                    <div className="reaction">
                                        {/* <button className="reaction-buttons" onClick={this.incrementCool}>😎Cool {this.state.showCool ? this.state.coolClick : ""}</button> */}
                                        <button id="cool" className="reaction-buttons" onClick={this.state.showCool ? this.incrementCool : this.decrementCool}>😎Cool {this.state.coolClick}</button>                                        
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