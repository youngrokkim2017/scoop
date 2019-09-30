import React from 'react';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: "0",
            body: ""
        };

        this.handleSubmit = this.handleSubmit.bing(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.action(this.state)
        .then(
            () => this.props.history.push(`/businesses/${this.props.business.id}`)
        );
    }

    handleInput(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            });
        }
    }

    render() {

        let { business } = this.props

        return (
            <div className="review-form-header">
                <header className="review-form-nav">
                    <div>
                        <Lnk to="/">
                            <span><h1>Scoop</h1></span>
                        </Lnk>
                    </div>
                    
                    <div>
                        {this.props.formType === "create" ? "Create a Review" : "Edit Review" }
                    </div>
                </header>

                <div className="review-form">
                    <form>
                        <div>
                            <div>
                                <Link to={`/businesses/${business.id}`}>
                                    <h1>{business.name}</h1>
                                </Link>
                            </div>

                            <div className="rating-contents">
                                <div className="rating">
                                    <span>Rating</span>

                                    <input type="radio" name="rating" value="1" onChange={this.handleInput('rating')}/>

                                    <input type="radio" name="rating" value="2" onChange={this.handleInput('rating')} />

                                    <input type="radio" name="rating" value="3" onChange={this.handleInput('rating')} />

                                    <input type="radio" name="rating" value="4" onChange={this.handleInput('rating')} />

                                    <input type="radio" name="rating" value="5" onChange={this.handleInput('rating')} />

                                </div>

                                <textarea onChange={this.handleInput('body')} value={this.state.body} placeholder="Write your review here" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        <button onClick={this.handleSubmit}>{this.props.formType === "create" ? "Create Review" : "Edit Review"}</button>
                    </form>
                </div>
            </div>
        )
    }
}