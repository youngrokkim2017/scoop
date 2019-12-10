import React from 'react';
import { Link } from 'react-router-dom';
import BusinessMap from './business_map';
import Navbar from '../nav_bar/nav_bar';
import ReviewIndexContainer from '../reviews/review_index_container';
import ReviewIndexItem from '../reviews/review_index_item';
import ScrollImage from './scroll_image';
import SearchItems from '../search/search_items';

class BusinessShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // input: ""
            find: "",
            near: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchInputs = this.handleSearchInputs.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId)

        // this.props.fetchReviews(this.props.match.params.businessId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.fetchBusiness(this.props.match.params.businessId)
        }

        // if (this.props.find !== this.prevProps.find) {
        //     this.props.find = ""
        // }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.find.length >= 1 || this.state.near.length >= 1) {
            this.props.getSearchedBusinesses(this.state.find)
                .then(() => {
                    // this.props.getSearchedBusinesses(this.state.near)
                        // .then(() => {
                            // this.props.history.push(`/search=${this.state.find}+${this.state.near}`)
                            this.props.history.push(`/search=${this.state.find}`)
                        // })
                })
        } else {
            this.props.history.push('/businesses')
        }
    }

    handleChange(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    handleLogout() {
        this.props.logout()
            .then(() => {
                this.props.history.push(`/`)
            });
    }

    handleSearchInputs() {
        let searchInputs = document.getElementsByClassName('search-results-business');
        searchInputs = searchInputs[0]
        let searchResults = document.getElementsByClassName('search-items');
        searchResults = Array.from(searchResults)

        if (searchInputs !== null || searchInputs !== undefined) {
            searchInputs.classList.remove('hide')
            searchResults.forEach((result) => {
                result.classList.remove('hide')
            })
        } 

        this.props.getSearchedBusinesses(this.state.find);
    }

    render() {
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
        if (averageRating === 0 || averageRating === undefined || averageRating === null) ratingSrc = window.zeroStar
        if (averageRating < 1.25) ratingSrc = window.oneStar
        if (averageRating > 1.25 && averageRating < 1.874) ratingSrc = window.oneHalfStar
        if (averageRating > 1.875 && averageRating < 2.24) ratingSrc = window.twoStar
        if (averageRating > 2.25 && averageRating < 2.874) ratingSrc = window.twoHalfStar
        if (averageRating > 2.875 && averageRating < 3.24) ratingSrc = window.threeStar
        if (averageRating > 3.25 && averageRating < 3.874) ratingSrc = window.threeHalfStar
        if (averageRating > 3.875 && averageRating < 4.24) ratingSrc = window.fourStar
        if (averageRating > 4.25 && averageRating < 4.874) ratingSrc = window.fourHalfStar
        if (averageRating > 4.875) ratingSrc = window.fiveStar
        
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

        let searchResults = this.props.searchResults.map((items) => {
            return <SearchItems key={items.id} items={items} />
        });

        return (

            <div className="business-show">
                <div>
                    {/* <Navbar /> */}

                    <div className="navbar-container">
                        <div className="default-navbar">

                            <div className="nav-logo">
                                <Link to="/">scoop</Link>
                            </div>

                            <form className="nav-search-bar">
                                <label className="nav-search-find">
                                    <span className="nav-find-text">Find</span>
                                    <input
                                        className="nav-find-container"
                                        type="text"
                                        onChange={this.handleChange('find')}
                                        placeholder="ice cream, frozen yogurt, gelato..." //shaved ice, soft serve, ..etc
                                    // value={this.state.find} 
                                    />

                                    {this.state.find ?
                                        <div className="search-results-business">
                                            {searchResults}
                                        </div>

                                        :

                                        // <div className="search-results"></div>
                                        ""
                                    }

                                </label>

                                <label className="nav-search-near">
                                    <span className="nav-near-text">Near</span>
                                    <input
                                        className="nav-near-container"
                                        type="text"
                                        onChange={this.handleChange('near')}
                                        placeholder="address, city, state, or zip..."
                                    // value={this.state.near} 
                                        onInput={this.handleSearchInputs}
                                        // style={{borderBottom: '1px solid black'}}
                                    />

                                    {/* <div className="search-results-business"></div> */}

                                </label>
                                <button className="nav-search-button" onClick={this.handleSubmit}>Search</button>
                            </form>

                            <div className="nav-user">
                                {this.props.loggedIn ?

                                    <div className="navbar-logout-dropdown">
                                        <button className="navbar-dropbtn">Welcome, {currentUser.firstName}
                                            {/* <img className="profile-pic" src={this.props.user.photoUrl} alt=""/> */}
                                            <i className="navbar-fa fa-caret-down"></i>
                                        </button>
                                        <div className="navbar-logout-dropdown-content">
                                            <a className="navbar-logout-link" onClick={this.props.logout}>Log Out</a>
                                        </div>
                                    </div>

                                    :

                                    <div>

                                        <nav className="navbar-signup-login">
                                            <Link to="/login" className="navbar-login">Log In</Link>
                                            <Link to="/signup" className="navbar-signup">Sign Up</Link>
                                        </nav>
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
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
                                    <img src={window.zeroStar} alt=""/>
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
                            {/* <Link to={`/businesses/${business.id}/reviews`}>
                                Write a Review
                            </Link> */}

                            { this.props.loggedIn ? 
                                <Link to={`/businesses/${business.id}/reviews`}>
                                    Write a Review
                                </Link>
                                
                                :

                                <Link to="/login">
                                    Write a Review
                                </Link>
                            }
                        </div>
                    </div>

                    <div className="business-map-and-info">
                        <div className="business-map-and-info-left">
                            <div className="business-show-map">
                                <div className="business-map-box">
                                    <BusinessMap
                                        businesses={[business]}
                                        businessId={business.id}
                                        fetchBusiness={this.props.fetchBusiness}
                                    />
                                </div>
                            </div>

                            {/* <div className="business-address">

                                <span>{`${business.address}`}</span>
                                <br/>
                                <span>{`${business.city}`}</span>
                                <span>,</span>
                                <span>{`${business.state}`}</span>
                                <span>,</span>
                                <span>{`${business.zipCode}`}</span>
                            </div>
                            
                            <div className="business-phone">
                                <span>{`${business.phoneNumber}`}</span>
                            </div>

                            <div className="business-website">
                                <span><a href={business.website}>{`${business.website}`}</a></span>
                            </div> */}
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
                                {/* <Link to={`/businesses/${business.id}/reviews`}>
                                    <span style={{ paddingRight: '5px' }}>Start your review of</span>
                                    <span style={{ fontWeight: 'bold' }}>{business.name}</span>
                                </Link> */}

                                {this.props.loggedIn ?
                                    <Link to={`/businesses/${business.id}/reviews`}>
                                        <span style={{ paddingRight: '5px' }}>Start your review of</span>
                                        <span style={{ fontWeight: 'bold' }}>{business.name}</span>
                                    </Link>

                                    :

                                    <Link to="/login">
                                    <span style={{ paddingRight: '5px' }}>Start your review of</span>
                                    <span style={{ fontWeight: 'bold' }}>{business.name}</span>
                                </Link>
                                }
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
                            <div className="right-column-sticky">

                                {/* <div> */}
                                    <span style={{ fontWeight: 'bold', color: 'rgb(201, 29, 29)' }}>Location & Contact</span>
                                    <div className="business-address">
                                        <img src={window.address} alt="" />
                                        <span>{`${business.address}`}</span>
                                        <br />
                                        <span style={{paddingLeft: '30px'}}>{`${business.city}`}</span>
                                        <span>,</span>
                                        <span>{`${business.state}`}</span>
                                        {/* <span>,</span> */}
                                        <br/>
                                        <span style={{paddingLeft: '30px'}}>{`${business.zipCode}`}</span>
                                    </div>

                                    <div className="business-phone">
                                        {/* <span>Phone Number </span> */}
                                        <img src={window.contact} alt=""/>
                                        <span>{`${business.phoneNumber}`}</span>
                                    </div>

                                    <div className="business-website">
                                        {/* <span>Website </span> */}
                                        <img src={window.website} alt=""/>
                                        <span><a href={business.website}>{`${business.website}`}</a></span>
                                    </div>
                                {/* </div> */}

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

                <footer className="footer-img">
                    <img src={window.footer} alt="" />
                </footer>
            </div>
        )
    }
}

export default BusinessShow;