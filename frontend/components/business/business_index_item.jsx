import React from 'react';
import { withRouter, Link } from 'react-router-dom';

export default class BusinessIndexItem extends React.Component {
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
        // return (
        //     <li key={business.id}> 
        //         {business.description}
        //     </li>
        // )

        // const {  } = this.props.business;
        // let business = this.props.business;

        let businessReviews = this.props.business.reviews;
        // console.log(this.props.business.reviews);
        let reviewRatings;
        let sum = 0;
        reviewRatings = businessReviews.map(review => (
            // Object.values(review)[4]
            sum += Object.values(review)[4]
        ))
        // console.log(reviewRatings);
        let sumRating = reviewRatings[reviewRatings.length - 1]
        let averageRating = sumRating / (reviewRatings.length * 1.0)
        // console.log(averageRating);
        let reviewsCount = reviewRatings.length.toString(); 

        // let starRatingsList = ["*", "**", "***", "****", "*****"];

        // let starRating;
        // starRating = starRatingsList[Math.floor(averageRating) - 1];

        
        // console.log(this.props.business);
        // let business = this.props.business;
            

        return (
            <li className="business-index-item"    
                //onClick={this.handleClick}
            >
                    <div className="business-photo">
                        {/* <img src="`${this.props.business.photos}" alt="" /> */}
                        <img src={this.props.business.photoUrl} alt=""/>
                    </div>
                    
                <div className="business-item-info">

                    <div className="business-index-item-left">
                        <div className="busines-item-name">
                            <Link className="business-item-link" to={`/businesses/${this.props.business.id}`} >
                                <div>{this.props.business.name}</div>
                            </Link>
                        </div>
                        <div className="business-item-rating">
                            <span>{averageRating.toString()}</span>
                            {/* <span>{starRating}</span> */}
                            <span style={{ paddingLeft: '10px', color: 'gray' }}>{reviewsCount} reviews</span>
                        </div>
                        <div className="business-item-price"> 
                            <span>{this.props.business.priceRange}</span>
                            <span style={{ padding: '0px 5px' }}>-</span>
                            <span style={{ color: 'gray' }}>{this.props.business.category}</span>
                        </div>
                    </div>

                    <div className="business-index-item-right">
                        <div className="business-item-contact   -info">
                            <div className="business-item-phone-number">
                                <span>{this.props.business.phoneNumber}</span>
                            </div>
                            <div className="business-item-address">
                                <span>{this.props.business.address}</span>
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