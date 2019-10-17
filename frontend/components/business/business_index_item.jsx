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

        let reviews = this.props.reviews;
        // let reviewRatings;
        // let sum = 0;
        // reviewRatings = reviews.map(review => (
        //     // Object.values(review)[4]
        //     sum += Object.values(review)[4]
        // ))

        // let sumRating = reviewRatings[reviewRatings.length - 1]
        // console.log(sumRating);
        // let averageRating = sumRating / (reviewRatings.length * 1.0)
        // console.log(averageRating);

        return (
            <li className="business-index-item"    
                //onClick={this.handleClick}
            >
                <div className="business-item-info">
                    <div className="business-photo">
                        {/* <img src="`${this.props.business.photos}" alt=""/> */}
                    </div>

                    <div className="business-index-item-left">
                        <div className="busines-item-name">
                            <Link className="business-item-link" to={`/businesses/${this.props.business.id}`} >
                                <div>{this.props.business.name}</div>
                            </Link>
                        </div>
                        <div className="business-item-rating">
                            <span>star ratings go here</span>
                            {/* <span>{this.props.business.rating}</span> */}
                        </div>
                        <div className="business-item-price"> 
                            <span>{this.props.business.priceRange}</span>
                            <span style={{ padding: '0px 5px' }}>-</span>
                            <span>{this.props.business.category}</span>
                        </div>
                    </div>

                    <div className="business-index-item-right">
                        <div className="business-item-contact-info">
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