import React from 'react';
import { Link } from 'react-router-dom';
import BusinessMap from './business_map';
import Navbar from '../nav_bar/nav_bar';
import ReviewIndexContainer from '../reviews/review_index_container';
import ReviewIndexItem from '../reviews/review_index_item';
import ScrollImage from './scroll_image';

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


        let reviews = this.props.reviews;
        let reviewRatings;
        let sum = 0;
        reviewRatings = reviews.map(review => (
            // Object.values(review)[4]
            sum += Object.values(review)[4]
        ))

        let sumRating = reviewRatings[reviewRatings.length-1]
        // console.log(sumRating);
        let averageRating = sumRating / (reviewRatings.length * 1.0)
        // console.log(averageRating);

        let reviewsCount = reviewRatings.length;
        // console.log(reviewRatings.length);
        // console.log(reviewRatings[2]);

        let starRatingsList = ["*", "**", "***", "****", "*****"];

        let starRating;
        starRating = starRatingsList[Math.floor(averageRating) - 1];
        
        let ratingSrc;
        if (averageRating < 1.25) ratingSrc = window.oneStar
        if (averageRating > 1.25 && averageRating < 1.874) ratingSrc = window.oneHalfStar
        if (averageRating > 1.875 && averageRating < 2.24) ratingSrc = window.twoStar
        if (averageRating > 2.25 && averageRating < 2.874) ratingSrc = window.twoHalfStar
        if (averageRating > 2.875 && averageRating < 3.24) ratingSrc = window.threeStar
        if (averageRating > 3.25 && averageRating < 3.874) ratingSrc = window.threeHalfStar
        if (averageRating > 3.875 && averageRating < 4.24) ratingSrc = window.fourStar
        if (averageRating > 4.25 && averageRating < 4.874) ratingSrc = window.fourHalfStar
        if (averageRating > 4.875) ratingSrc = window.fiveStar
        
        // console.log(averageRating);
        // console.log(starRating);

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

        // const foodImageItems = this.props.business.foodPhotoUrls.map(foodPhoto => (
        //     <ScrollImage foodPhotoUrls={this.props.business.foodPhotoUrls} />)
        // );

        // console.log(this.props.business.foodPhotoUrls);
        // console.log(this.state);

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
                                {/* <span>{averageRating.toString()}</span> */}
                                {/* <span>{starRating}</span> */}
                                {averageRating > 0 ?
                                    <img src={ratingSrc} alt=""/>
                                    :
                                    <span>N/A</span>
                                }
                                {/* <span style={{ paddingLeft: '10px', color: 'gray' }}>{reviewsCount.toString()} reviews</span> */}
                                <span className="business-rating-count">{reviewsCount.toString()} reviews</span>

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
                                {/* <BusinessMap
                                    businesses={[business]}
                                    businessId={business.id}
                                    fetchBusiness={this.props.fetchBusiness}
                                /> */}

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
                            <div className="business-food-photos">
                                {/* <img src={this.props.business.foodPhotoUrls[0]} alt="" /> */}
                                {/* <img src={this.props.business.foodPhotoUrls[1]} alt="" /> */}
                                {/* <img src={this.props.business.foodPhotoUrls[2]} alt=""/> */}
                                {/* <ScrollImage foodPhotoUrls={this.props.business.foodPhotoUrls} /> */}
                                <ScrollImage foodPhotoUrls={business.foodPhotoUrls} />
                                {/* {foodImageItems} */}
                            </div>
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
                            <div className="business-hours">
                                <span style={{ fontWeight: 'bold', color: 'rgb(201, 29, 29)' }}>Hours</span>
                                <div>
                                    <span style={{ fontWeight: 'bold', paddingRight: '30px' }}>Mon</span>
                                    {`${business.openTime} - ${business.closeTime}`}
                                </div>
                                <div>   
                                    <span style={{ fontWeight: 'bold', paddingRight: '35px' }}>Tue</span>
                                    {`${business.openTime} - ${business.closeTime}`}
                                </div>
                                <div>
                                    <span style={{ fontWeight: 'bold', paddingRight: '30px' }}>Wed</span>
                                    {`${business.openTime} - ${business.closeTime}`}
                                </div>
                                <div>
                                    <span style={{ fontWeight: 'bold', paddingRight: '34px' }}>Thu</span>
                                    {`${business.openTime} - ${business.closeTime}`}
                                </div>
                                <div>
                                    <span style={{ fontWeight: 'bold', paddingRight: '42px' }}>Fri</span>
                                    {`${business.openTime} - ${business.closeTime}`}
                                </div>
                                <div>
                                    <span style={{ fontWeight: 'bold', paddingRight: '38px' }}>Sat</span>
                                    {`${business.openTime} - ${business.closeTime}`}
                                </div>
                                <div>
                                    <span style={{ fontWeight: 'bold', paddingRight: '33px' }}>Sun</span>
                                    {`${business.openTime} - ${business.closeTime}`}
                                </div>
                            </div>
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
                        </div>
                    </div>

                </div>


                {/* <div className="business-show-review"> */}
                    {/* <p> */}
                        {/* {this.props.businesses.reviews !== undefined || this.props.businesses.reviews !== null ? this.props.business.reviews.body : "No reviews for this business yet"} */}
                        {/* {business.reviews !== undefined || business.reviews !== null || business.reviews.length !== 0 ? business.reviews : "No reviews for this business yet"} */}
                        {/* {business.reviews !== undefined || business.reviews !== null ? business.reviews.body : "No reviews for this business yet"} */}
                    {/* </p> */}

                    {/* <div>
                        <ReviewIndexContainer
                            // currentUser={this.props.currentUser}
                            business={business}
                        />
                    </div> */}

                    {/* <div>
                        {reviewsList}
                    </div> */}
                {/* </div> */}
            </div>
        )
    }
}

export default BusinessShow;