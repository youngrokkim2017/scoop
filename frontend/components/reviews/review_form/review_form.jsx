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
            businessId: this.props.match.params.businessId,
            // id: this.props.match.params.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToBusinessShow = this.navigateToBusinessShow.bind(this);
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

    //         })
    //         oneStar.addEventListener('mouseleave', () => {

    //         })
    //     }
    // }

    navigateToBusinessShow() {
        // this.props.history.push(`/businesses/${this.props.match.params.businessId}`);
        this.props.history.replace(`/businesses/${this.props.match.params.businessId}`);
    }

    handleSubmit(e) {
        e.preventDefault();
        const businessId = parseInt(this.props.match.params.businessId);
        const review = Object.assign({}, this.state, {
            business_id: businessId
        });

        // this.props.action(review);
        this.props.action(this.state) 
            .then(
                // () => this.props.history.replace(`/businesses/${this.props.match.params.businessId}`)
                () => this.navigateToBusinessShow()
            )

        // this.navigateToBusinessShow();
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
        // console.log(business);
        // console.log(this.props.match.params.businessId);
        console.log(this.props);
        // console.log(this.props.businessId);

        // console.log(this.state);

        // session-navbar => review-navbar
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

                        <div className="logout-dropdown">
                            <button className="dropbtn">Welcome, {currentUser.firstName}
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="logout-dropdown-content">
                                <a className="logout-link" onClick={this.props.logout}>Log Out</a>
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
                    </div>
                </div>

                <header>
                    <span>{}</span>
                </header>

                <div className="review-form-contents">
                    <div className="review-form-inputs">
                        <form onSubmit={this.handleSubmit}>
                            {/* <input
                                type="number"
                                value={this.state.rating}
                                onChange={this.handleInput("rating")}
                                /> */}

                            <div className="stars">
                                <input className="star-input" type="radio" value="1" onChange={this.handleInput("rating")}/>
                                {/* <label>1</label> */}
                                <label className="star-label">&#9733;</label>
                                <input className="star-input" type="radio" value="2" onChange={this.handleInput("rating")}/>
                                {/* <label>2</label> */}
                                <label className="star-label">&#9733;</label>
                                <input className="star-input" type="radio" value="3" onChange={this.handleInput("rating")}/>
                                {/* <label>3</label> */}
                                <label className="star-label">&#9733;</label>
                                <input className="star-input" type="radio" value="4" onChange={this.handleInput("rating")}/>
                                {/* <label>4</label> */}
                                <label className="star-label">&#9733;</label>
                                <input className="star-input" type="radio" value="5" onChange={this.handleInput("rating")}/>
                                {/* <label>5</label> */}
                                <label className="star-label">&#9733;</label>
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
                            
                            <input className="review-form-button" type="submit" value={this.props.formType === "create" ? "Post Review" : "Edit Review"} />
                            <button className="review-form-cancel" onClick={this.navigateToBusinessShow}>Cancel</button>
                        </form>
                        {/* <button onClick={this.navigateToBusinessShow}>Cancel</button> */}
                    </div>
                </div>
            </div>
        );
    }
}

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

//         // console.log(this.props.business);
//         // console.log(this.props.businessId);
//         // console.log(this.props.businesses);
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

