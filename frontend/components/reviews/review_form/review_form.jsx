import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: '',
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToBusinessShow = this.navigateToBusinessShow.bind(this);
    }

    navigateToBusinessShow() {
        this.props.history.push(`/businesses/${this.props.match.params.businessId}`);
    }

    handleSubmit(e) {
        e.preventDefault();
        const businessId = parseInt(this.props.match.params.businessId);
        const review = Object.assign({}, this.state, {
            business_id: businessId
        });

        this.props.action(review);
        this.navigateToBusinessShow();
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

        return (
            <div className="review-form">
                <div className="session-navbar">
                    <div className="nav-logo">
                        <Link to="/">scoop</Link>
                        <span>Write a Review</span>
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
                </div>

                <div className="sub-navbar">
                    <Link to={`/businesses/${this.props.match.params.businessId}`}>Back to Business</Link>
                </div>

                {/* <header>
                    <h1>{this.props.business.name}</h1>
                </header> */}

                <div className="review-form-inputs">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="number"
                            value={this.state.rating}
                            onChange={this.handleInput("rating")}
                            />
                        <label>Select your rating</label>
                       
                        <p>
                            {/* <label>Review</label> */}   
                        </p>

                        <p>
                            <textarea
                                cols="80"
                                rows="25"
                                value={this.state.body}
                                onChange={this.handleInput("body")}
                                placeholder="Your review helps others learn about great local businesses"
                            />
                        </p>
                        
                        <input type="submit" value="Post Review" />
                        <button onClick={this.navigateToBusinessShow}>Cancel</button>
                    </form>
                    {/* <button onClick={this.navigateToBusinessShow}>Cancel</button> */}
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

