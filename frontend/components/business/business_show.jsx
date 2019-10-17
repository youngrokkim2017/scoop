import React from 'react';
import { Link } from 'react-router-dom';
import BusinessMap from './business_map';
import Navbar from '../nav_bar/nav_bar';
import ReviewIndexContainer from '../reviews/review_index_container';
import ReviewIndexItem from '../reviews/review_index_item';

class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId)

        // this.props.fetchReviews(this.props.match.params.businessId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.fetchBusiness(this.props.match.params.businessId)
        }
    }

    render() {
        // console.log(currentUser)

        // console.log(this.props.business);
        // console.log(this.props.businessId);
        if (this.props.business === undefined) return null;
        let { business } = this.props;

        // console.log(this.props.reviews);
        // console.log(Object.values(Object.values(this.props.reviews)));
        let reviews = this.props.reviews;
        let reviewRatings;
        let sum = 0;
        reviewRatings = reviews.map(review => (
            // Object.values(review)[4]
            sum += Object.values(review)[4]
        ))

        let sumRating = reviewRatings[reviewRatings.length-1]
        console.log(sumRating);
        let averageRating = sumRating / (reviewRatings.length * 1.0)
        console.log(averageRating);

        // console.log(reviewRatings.length);
        // console.log(reviewRatings[2]);

        
        // let averageBusinessRating = reviewRatings.sum / (reviewRatings.length * 1.0);
        // let averageBusinessRating = reviewRatings.reduce((prev, curr) => curr += prev);
        // averageBusinessRating /= (reviewRatings * 1.0);
        // let reviewSum = reviewRatings.reduce((prev, curr) => curr += prev);
        // let averageBusinessRating = reviewSum / (reviewRatings.length * 1.0)
        // console.log(averageBusinessRating);

        // REVIEWS
        
        // const { reviews } = this.props;
        // const reviewsList = reviews.map(review => {
        //     return (
        //         <ReviewIndexItem
        //             review={review}
        //             business={business}
        //             fetchReviews={this.props.fetchReviews}
        //         />
        //     )
        // });

        return (

            <div className="business-show">
                <div>
                    <Navbar />
                </div>

                <div className="sub-navbar">
                    <div className="sub-navbar-left">
                        <Link to="/businesses">Creamery</Link>
                        <Link to="/businesses">Frozen Yogurt</Link>
                        <Link to="/businesses">Gelato</Link>
                        <Link to="/businesses">Soft Serve</Link>  
                        <Link to="/businesses">Other</Link>
                    </div>
                    <div className="sub-navbar-right">
                        <Link to={`/businesses/${business.id}/reviews`}>Write a Review</Link>
                        <Link to="/businesses">Back to Businesses</Link>
                    </div>
                </div>

                <div className="business-container">

                    <div className="business-show-intro">

                        <div className="business-show-title">
                            <header>
                                <h1>{this.props.business.name}</h1>
                            </header>

                            <div className="business-rating">
                                {/* <span>{`${business.rating}`}</span> */}
                                <span>{averageRating.toString()}</span>

                            </div>

                            <div className="business-price-category">
                                {/* <span>Price </span> */}
                                <span>{`${business.priceRange}`}</span>
                                <span>-</span>
                                <span className="business-show-title-category">{`${business.category}`}</span>
                            </div>

                            {/* <div className="bussines-category">
                                <span>{`${business.category}`}</span>
                            </div> */}
                        </div>

                        <div className="business-show-write-review">
                            <Link to={`/businesses/${business.id}/reviews`}>
                                Write a Review
                            </Link>

                            {/* { currentUser ? 
                                <Link to={`/businesses/${business.id}/reviews`}>
                                    Write a Review
                                </Link>
                                
                                :

                                <Link to="/login">
                                    Write a Review
                                </Link>
                            } */}
                        </div>
                    </div>

                    <div className="business-map-and-info">
                        <div className="business-map-and-info-left">
                            <div className="business-map">
                                <div className="business-map-box">
                                    <BusinessMap
                                        businesses={[business]}
                                        businessId={business.id}
                                        fetchBusiness={this.props.fetchBusiness}
                                        />
                                </div>

                                {/* <div className="business-show-map">
                                    <BusinessMap businesses={this.props.businesses} />
                                </div> */}

                            </div>

                            {/* <div className="business-description">
                                <span>Description </span>
                                <span>{`${business.description}`}</span>                        
                            </div> */}
                            
                            {/* <div className="business-info-box">
                                <span>{`${business.address}`}</span>
                                <span>{`${business.phoneNumber}`}</span>
                                <span><a href={business.website}>{`${business.website}`}</a></span>
                            </div> */}

                            <div className="business-address">
                                {/* <span>Address </span> */}
                                <span>{`${business.address}`}</span>
                                <br/>
                                <span>{`${business.city}`}</span>
                                <span>,</span>
                                <span>{`${business.state}`}</span>
                                <span>,</span>
                                <span>{`${business.zipCode}`}</span>
                            </div>
                            
                            <div className="business-phone">
                                {/* <span>Phone Number </span> */}
                                <span>{`${business.phoneNumber}`}</span>
                            </div>

                            <div className="business-website">
                                {/* <span>Website </span> */}
                                <span><a href={business.website}>{`${business.website}`}</a></span>
                            </div>
                        </div>

                        <div className="business-map-and-info-right">

                        </div>
                    </div>
                    
                    <div className="review-index-and-info">
                        <div className="review-index-list">
                            <div className="review-index-header">
                                {/* <h2>Recommended Reviews</h2> */}
                                <span className="review-recommend">Recommended Reviews</span>
                                <span className="for-business">for {business.name}</span>
                            </div>

                            <div className="business-review-start-review">
                                <Link to={`/businesses/${business.id}/reviews`}>
                                    <span style={{ paddingRight: '5px' }}>Start your review of</span>
                                    <span style={{ fontWeight: 'bold' }}>{business.name}</span>
                                </Link>
                            </div>

                            <div className="below-review-header">
                                <div className="business-show-review-container">
                                    <ReviewIndexContainer
                                        currentUser={this.props.currentUser}
                                        businessId={this.props.business.id}
                                        business={business}
                                    />
                                </div>
                            </div>
                            {/* <span>Page 1 of 1</span> */}
                        </div>

                        <div className="right-column-info">
                            <div className="more-business-info">
                                <span className="more-business-info-title">More Business Info</span>
                            </div>

                            <div className="business-credit-card">
                                <span>Credit Card </span>
                                <span className="business-answers">{`${business.creditCard}`}</span>
                            </div>

                            <div className="business-parking">
                                <span>Parking </span>
                                <span className="business-answers">{`${business.parking}`}</span>
                            </div>

                            <div className="business-wifi">
                                <span>Wifi </span>
                                <span className="business-answers">{`${business.wifi}`}</span>
                            </div>

                            <div className="business-restroom">
                                <span>Restroom </span>
                                <span className="business-answers">{`${business.restroom}`}</span>
                            </div>

                            <div className="business-open">
                                <span>Open </span>
                                <span className="business-answers">{`${business.openTime}`}</span>
                            </div>

                            <div className="business-close">
                                <span>Close </span>
                                <span className="business-answers">{`${business.closeTime}`}</span>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="business-show-review">
                    <p>
                        {/* {this.props.businesses.reviews !== undefined || this.props.businesses.reviews !== null ? this.props.business.reviews.body : "No reviews for this business yet"} */}
                        {business.reviews !== undefined || business.reviews !== null || business.reviews.length !== 0 ? business.reviews : "No reviews for this business yet"}
                        {/* {business.reviews !== undefined || business.reviews !== null ? business.reviews.body : "No reviews for this business yet"} */}
                    </p>

                    {/* <div>
                        <ReviewIndexContainer
                            // currentUser={this.props.currentUser}
                            business={business}
                        />
                    </div> */}

                    {/* <div>
                        {reviewsList}
                    </div> */}
                </div>
            </div>
        )
    }
}

export default BusinessShow;