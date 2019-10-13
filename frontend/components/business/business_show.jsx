import React from 'react';
import { Link } from 'react-router-dom';
import BusinessMap from './business_map';
import Navbar from '../nav_bar/nav_bar';

class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.fetchBusiness(this.props.match.params.businessId)
        }
    }

    render() {
        console.log(this.props.business);
        console.log(this.props.businessId);
        if (this.props.business === undefined) return null;
        let { business } = this.props;
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
                                <span>{`${business.rating}`}</span>

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
                                {/* <button>Write a Review</button> */}
                                {/* <input className="business-show-review-button" type="submit" value="Write a Review"/> */}
                                Write a Review
                            </Link>

                            {/* { currentUser ? 
                                <Link to={`/businesses/${business.id}/reviews`}>
                                    <button>Write a Review</button>
                                </Link>
                                
                                :

                                <Link to="/login">
                                    <button>Write a Review</button>
                                </Link>
                            } */}
                        </div>
                    </div>

                    <div className="business-map-and-info">
                        <div className="business-map-and-info-left">
                            <div className="business-map">
                                {/* <div>
                                    <BusinessMap
                                        businesses={business}
                                        businessId={business.id}
                                        fetchBusiness={this.props.fetchBusiness}
                                        />
                                </div> */}

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
                                <span>Address </span>
                                <span>{`${business.address}`}</span>
                            </div>
                            
                            <div className="business-phone">
                                <span>Phone Number </span>
                                <span>{`${business.phoneNumber}`}</span>
                            </div>

                            <div className="business-website">
                                <span>Website </span>
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
                        </div>

                        <div className="right-column-info">
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


                {/* <div className="business-show-review">
                    <p>
                        {this.props.businesses.reviews !== undefined || this.props.businesses.reviews !== null ? this.props.business.reviews.body : "No reviews for this business yet"}
                    </p>
                </div> */}
            </div>
        )
    }
}

export default BusinessShow;