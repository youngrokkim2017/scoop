import React from 'react';
import { withRouter, Link } from 'react-router-dom';

export default class SearchIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const businessId = this.props.business.id;
        this.props.history.push(`/businesses/${businessId}`);
    }

    render() {
        let businessReviews = this.props.business.reviews;

        let reviewRatings;
        let sum = 0;
        reviewRatings = businessReviews.map(review => (
            sum += Object.values(review)[4]
        ))
        let sumRating = reviewRatings[reviewRatings.length - 1]
        let averageRating = sumRating / (reviewRatings.length * 1.0)
        let reviewsCount = reviewRatings.length.toString();

        let ratingSrc;
        if (averageRating < 1.25) ratingSrc = window.oneStar;
        if (averageRating > 1.25 && averageRating < 1.874) ratingSrc = window.oneHalfStar;
        if (averageRating > 1.875 && averageRating < 2.24) ratingSrc = window.twoStar;
        if (averageRating > 2.25 && averageRating < 2.874) ratingSrc = window.twoHalfStar;
        if (averageRating > 2.875 && averageRating < 3.24) ratingSrc = window.threeStar;
        if (averageRating > 3.25 && averageRating < 3.874) ratingSrc = window.threeHalfStar;
        if (averageRating > 3.875 && averageRating < 4.24) ratingSrc = window.fourStar;
        if (averageRating > 4.25 && averageRating < 4.874) ratingSrc = window.fourHalfStar;
        if (averageRating > 4.875) ratingSrc = window.fiveStar;

        return (
            <li className="business-index-item"
            // onClick={this.handleClick}
            >
                <div className="business-photo">
                    <img src={this.props.business.photoUrl} alt="" />
                </div>

                <div className="business-item-info">

                    <div className="index-item-top-half">

                        <div className="business-index-item-left">
                            <div className="busines-item-name">
                                <Link className="business-item-link" to={`/businesses/${this.props.business.id}`} >
                                    <div>{this.props.business.name}</div>
                                </Link>
                            </div>
                            <div className="business-item-rating">
                                {averageRating > 0 ?
                                    <img src={ratingSrc} alt="" />
                                    :
                                    <img src={window.zeroStar} alt="" />
                                }
                                <span className="business-item-rating-count">{reviewsCount} reviews</span>
                            </div>
                            <div className="business-item-price">
                                <span>{this.props.business.priceRange}</span>
                                <span style={{ padding: '0px 5px' }}>-</span>
                                <span style={{ color: 'gray' }}>{this.props.business.category}</span>
                            </div>
                        </div>

                        <div className="business-index-item-right">
                            <div className="business-item-contact-info">
                                <div className="business-item-phone-number">
                                    <span>{this.props.business.phoneNumber}</span>
                                </div>
                                <div className="business-item-address">
                                    <span>{this.props.business.address}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="business-item-description">
                        <span>{this.props.business.description}</span>
                    </div>
                </div>
            </li>
        )
    }
}