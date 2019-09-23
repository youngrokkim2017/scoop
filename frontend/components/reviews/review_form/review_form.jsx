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

    render() {
        return (
            <div className="review-form">

            </div>
        )
    }
}