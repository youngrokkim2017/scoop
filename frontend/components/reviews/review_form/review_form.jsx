import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        let body;
        if (this.props.review === undefined) {
            body = ''
        } else {
            body = this.props.review.body
        }

        this.state = {
            rating: '0',
            body: body,
            // businessId: this.props.match.params.businessId,
            business_id: this.props.match.params.businessId,
            // business: state.entities.businesses[ownProps.match.params.businessId],
            // id: this.props.match.params.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToBusinessShow = this.navigateToBusinessShow.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
        // this.props.fetchBusinesses();
    }

    // componentDidUpdate() {
    //     let oneStar = document.getElementById('one-star');
    //     let twoStar = document.getElementById('two-star');
    //     let threeStar = document.getElementById('three-star');
    //     let fourStar = document.getElementById('four-star');
    //     let fiveStar = document.getElementById('five-star');

    //     let comment = document.getElementById('rating-comment');

    //     let starRatingComment = comment.textContent;

    //     if (oneStar && twoStar && threeStar && fourStar && fiveStar) {
    //         oneStar.addEventListener('mouseover', () => {
    //             oneStar.style.backgroundColor = '#cc8b1f';
    //             twoStar.style.backgroundColor = '#666';
    //             threeStar.style.backgroundColor = '#666';
    //             fourStar.style.backgroundColor = '#666';
    //             fiveStar.style.backgroundColor = '#666';
    //             comment.innerText = 'Eek! Methinks not.';
    //         })
    //         oneStar.addEventListener('mouseout', () => {
    //             oneStar.style.backgroundColor = '';
    //             twoStar.style.backgroundColor = '';
    //             threeStar.style.backgroundColor = '';
    //             fourStar.style.backgroundColor = '';
    //             fiveStar.style.backgroundColor = '';
    //             comment.innerText = starRatingComment;
    //         })

    //         twoStar.addEventListener('mouseover', () => {
    //             oneStar.style.backgroundColor = '#dcb228';
    //             twoStar.style.backgroundColor = '#dcb228';
    //             threeStar.style.backgroundColor = '#666';
    //             fourStar.style.backgroundColor = '#666';
    //             fiveStar.style.backgroundColor = '#666';
    //             comment.innerText = 'Meh. I\'ve experienced better.';
    //         })
    //         twoStar.addEventListener('mouseout', () => {
    //             oneStar.style.backgroundColor = '';
    //             twoStar.style.backgroundColor = '';
    //             threeStar.style.backgroundColor = '';
    //             fourStar.style.backgroundColor = '';
    //             fiveStar.style.backgroundColor = '';
    //             comment.innerText = starRatingComment;
    //         })

    //         threeStar.addEventListener('mouseover', () => {
    //             oneStar.style.backgroundColor = '#f0991e';
    //             twoStar.style.backgroundColor = '#f0991e';
    //             threeStar.style.backgroundColor = '#f0991e';
    //             fourStar.style.backgroundColor = '#666';
    //             fiveStar.style.backgroundColor = '#666';
    //             comment.innerText = 'A-OK.';
    //         })
    //         threeStar.addEventListener('mouseout', () => {
    //             oneStar.style.backgroundColor = '';
    //             twoStar.style.backgroundColor = '';
    //             threeStar.style.backgroundColor = '';
    //             fourStar.style.backgroundColor = '';
    //             fiveStar.style.backgroundColor = '';
    //             comment.innerText = starRatingComment;
    //         })

    //         fourStar.addEventListener('mouseover', () => {
    //             oneStar.style.backgroundColor = '#f26a2c';
    //             twoStar.style.backgroundColor = '#f26a2c';
    //             threeStar.style.backgroundColor = '#f26a2c';
    //             fourStar.style.backgroundColor = '#f26a2c';
    //             fiveStar.style.backgroundColor = '#666';
    //             comment.innerText = 'Yay! I\'m a fan.';
    //         })
    //         fourStar.addEventListener('mouseout', () => {
    //             oneStar.style.backgroundColor = '';
    //             twoStar.style.backgroundColor = '';
    //             threeStar.style.backgroundColor = '';
    //             fourStar.style.backgroundColor = '';
    //             fiveStar.style.backgroundColor = '';
    //             comment.innerText = starRatingComment;
    //         })

    //         fiveStar.addEventListener('mouseover', () => {
    //             oneStar.style.backgroundColor = '#dd050b';
    //             twoStar.style.backgroundColor = '#dd050b';
    //             threeStar.style.backgroundColor = '#dd050b';
    //             fourStar.style.backgroundColor = '#dd050b';
    //             fiveStar.style.backgroundColor = '#dd050b';
    //             comment.innerText = 'Woohoo! As good as it gets!';
    //         })
    //         fiveStar.addEventListener('mouseout', () => {
    //             oneStar.style.backgroundColor = '';
    //             twoStar.style.backgroundColor = '';
    //             threeStar.style.backgroundColor = '';
    //             fourStar.style.backgroundColor = '';
    //             fiveStar.style.backgroundColor = '';
    //             comment.innerText = starRatingComment;
    //         })
    //     }
    // }

    navigateToBusinessShow() {
        // this.props.history.push(`/businesses/${this.props.match.params.businessId}`);
        this.props.history.replace(`/businesses/${this.props.match.params.businessId}`);
    }

    handleSubmit(e) {
        e.preventDefault();
        // const businessId = parseInt(this.props.match.params.businessId);
        // const review = Object.assign({}, this.state, {
        //     // business_id: businessId
        //     business_id: parseInt(this.props.match.params.businessId)
        // });

        // this.props.action(review);

        this.props.action(this.state) 
            .then(
                // () => this.props.history.replace(`/businesses/${this.props.match.params.businessId}`)
                () => this.navigateToBusinessShow()
            )
    }

    handleInput(type) {
        return (e) => {
            this.setState({
                // [type]: e.target.value
                [type]: e.currentTarget.value
            });
        }
    }

    render() {
        let placeholder = "Your review helps others learn about great local businesses.\n\nPlease don't review this business if you received a freebie for writing this review, or if you\'re connected in any way to the owner or employees."
        let { business } = this.props;

        let starText;
        if (this.state.rating == '0') starText = 'Select your rating'
        if (this.state.rating == '1') starText = 'Eek! Methinks not.'
        if (this.state.rating == '2') starText = 'Meh. I\'ve experienced better.'
        if (this.state.rating == '3') starText = 'A-OK.'
        if (this.state.rating == '4') starText = 'Yay! I\'m a fan.'
        if (this.state.rating == '5') starText = 'Woohoo! As good as it gets!'

        return (
            <div className="review-form">

                <div className="review-navbar"> 

                    {/* <div> */}

                    <div className="nav-logo">
                        <Link to="/">scoop</Link>
                        {/* <span>Write a Review</span> */}
                        <span>{this.props.formType === "create" ? "Write a Review" : "Edit Review"}</span>
                    </div>

                    {this.props.loggedIn ?

                        <div className="review-navbar-logout-dropdown">
                            <button className="navbar-dropbtn">Welcome, {currentUser.firstName}
                                <i className="navbar-fa fa-caret-down"></i>
                            </button>
                            <div className="navbar-logout-dropdown-content">
                                <a className="navbar-logout-link" onClick={this.props.logout}>Log Out</a>
                            </div>
                        </div>

                        :

                        <nav className="navbar-signup-login">
                            <Link to="/login" className="navbar-login">Log In</Link>
                            <Link to="/signup" className="navbar-signup">Sign Up</Link>
                        </nav>
                    }

                    {/* </div> */}

                </div>
                <div className="sub-navbar">
                    <div className="sub-navbar-left">
                        <Link to={"/"}>Go to Home</Link>
                    </div>
                    <div className="sub-navbar-right">
                        <Link to={`/businesses/${this.props.match.params.businessId}`}>Back to Business</Link>
                        {/* <Link to={`/businesses/${this.props.match.params.businessId}`}>Back to {this.props.business.name}</Link> */}
                    </div>
                </div>

                {/* <div>
                    <span>{business.name}</span>
                </div> */}

                <div className="review-form-contents">
                    <div className="review-form-inputs">
                        <form onSubmit={this.handleSubmit}>
                            {/* <input
                                type="number"
                                value={this.state.rating}
                                onChange={this.handleInput("rating")}
                                /> */}

                            <div className="stars">
                                {/* <input className="star-input" type="radio" value="1" onChange={this.handleInput("rating")}/>
                                <label className="star-label">&#9733;</label>
                                <input className="star-input" type="radio" value="2" onChange={this.handleInput("rating")}/>
                                <label className="star-label">&#9733;</label>
                                <input className="star-input" type="radio" value="3" onChange={this.handleInput("rating")}/>
                                <label className="star-label">&#9733;</label>
                                <input className="star-input" type="radio" value="4" onChange={this.handleInput("rating")}/>
                                <label className="star-label">&#9733;</label>
                                <input className="star-input" type="radio" value="5" onChange={this.handleInput("rating")}/>
                                <label className="star-label">&#9733;</label> */}

                                <fieldset className="rating">
                                    <input type="radio" id="star5" name="rating" value="5" onChange={this.handleInput("rating")} />
                                    <label className="full" id="oneStar" htmlFor="star5" title="Awesome - 5 stars">&#9733;</label>
                                   
                                    <input type="radio" id="star4" name="rating" value="4" onChange={this.handleInput("rating")} />
                                    <label className="full" id="twoStar" htmlFor="star4" title="Pretty good - 4 stars">&#9733;</label>
                                    
                                    <input type="radio" id="star3" name="rating" value="3" onChange={this.handleInput("rating")} />
                                    <label className="full" id="threeStar" htmlFor="star3" title="Meh - 3 stars">&#9733;</label>
                                    
                                    <input type="radio" id="star2" name="rating" value="2" onChange={this.handleInput("rating")} />
                                    <label className="full" id="fourStar" htmlFor="star2" title="Kinda bad - 2 stars">&#9733;</label>

                                    <input type="radio" id="star1" name="rating" value="1" onChange={this.handleInput("rating")} />
                                    <label className="full" id="fiveStar" htmlFor="star1" title="Sucks big time - 1 star">&#9733;</label>

                                </fieldset>
                                <span id="rating-comment" className="rating-comment">{starText}</span>
                                {/* <p id="rating-comment">{starText}</p> */}
                                {/* <p>
                                    {starText}
                                </p> */}

                            </div>
                            {/* <label style={{ paddingLeft: '10px' }}>Select your rating</label> */}
                        
                            <p>
                                {/* <label>Review</label> */}   
                            </p>

                            <p>
                                <textarea
                                    className="review-input-textarea"
                                    cols="55"
                                    rows="15"
                                    value={this.state.body}
                                    onChange={this.handleInput("body")}
                                    placeholder={placeholder}
                                />
                            </p>
                            
                            <input className="review-form-button" type="submit" value={this.props.formType === "create" ? "Post Review" : this.props.formType === "edit" ? "Edit Review" : "Delete Review"} onClick={this.handleSubmit} />
                            <button className="review-form-cancel" onClick={this.navigateToBusinessShow}>Cancel</button>
                            {/* <button className="review-form-cancel" onClick={this.handleSubmit}>Cancel</button> */}
                        </form>
                        {/* <button onClick={this.navigateToBusinessShow}>Cancel</button> */}
                    </div>

                    <div className="review-form-img">
                        <img src={window.review} alt=""/>
                    </div>
                </div>

                <footer className="footer-img">
                    <img src={window.footer} alt="" />
                </footer>
            </div>
        );
    }
}

// export default ReviewForm;
export default withRouter(ReviewForm);


// import React from 'react';
// import { Link } from 'react-router-dom';

// import { withRouter } from 'react-router-dom';

// class ReviewForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             rating: "0",
//             body: ""
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(e) {
//         e.preventDefault();

//         this.props.action(this.state)
//         .then(
//             () => this.props.history.push(`/businesses/${this.props.business.id}`)
//             // () => this.props.history.push(`/businesses/${this.props.businessId}`)
//         );
//     }

//     handleInput(type) {
//         return (e) => {
//             this.setState({
//                 [type]: e.target.value
//             });
//         }
//     }

//     render() {
//         // if (this.props.business === undefined) return null;
//         let { business } = this.props;

//         return (
//             <div className="review-form-header">
//                 <header className="review-form-nav">
//                     <div>
//                         <Link to="/">
//                             <span><h1>Scoop</h1></span>
//                         </Link>
//                     </div>
                    
//                     <div>
//                         {this.props.formType === "create" ? "Create a Review" : "Edit Review" }
//                     </div>
//                 </header>

//                 <div className="review-form">
//                     <form>
//                         <div>
//                             <div>
//                                 <Link to={`/businesses/${business.id}`}>
//                                     <h1>{business.name}</h1>
//                                 </Link>
//                             </div>

//                             <div className="rating-contents">
//                                 <div className="rating">
//                                     <span>Rating</span>

//                                     <input type="radio" name="rating" value="1" onChange={this.handleInput('rating')}/>

//                                     <input type="radio" name="rating" value="2" onChange={this.handleInput('rating')} />

//                                     <input type="radio" name="rating" value="3" onChange={this.handleInput('rating')} />

//                                     <input type="radio" name="rating" value="4" onChange={this.handleInput('rating')} />

//                                     <input type="radio" name="rating" value="5" onChange={this.handleInput('rating')} />

//                                 </div>

//                                 <textarea onChange={this.handleInput('body')} value={this.state.body} placeholder="Write your review here" cols="30" rows="10"></textarea>
//                             </div>
//                         </div>

//                         <button onClick={this.handleSubmit}>{this.props.formType === "create" ? "Create Review" : "Edit Review"}</button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default withRouter(ReviewForm);

