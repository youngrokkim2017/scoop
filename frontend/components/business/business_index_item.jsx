import React from 'react';
import { wtihRouter, Link } from 'react-router-dom';

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

        return (
            <div 
                className="business-index-item"    
                //onClick={this.handleClick}
            >
                <div className="business-item-info">
                    <div className="business-photo">
                        <img src="`${this.props.business.photos}" alt=""/>
                    </div>
                    <div className="business-name">
                        <Link className="business-item-link" to={`/businesses/${props.business.id}`} >
                            {this.props.business.name}
                        </Link>
                    </div>
                    <div className="business-rating">
                        <span>star ratings go here</span>
                        <span>{this.props.business.rating}</span>
                    </div>
                    <div className="business-price"> 
                        <span>{this.props.business.price_range}</span>
                    </div>
                    <div className="business-description">
                        <span>{this.props.business.description}</span>
                    </div>
                    <div className="business-contact-info">
                        <div className="business-phone-number">
                            <span>{this.props.business.phone_number}</span>
                        </div>
                        <div className="business-address">
                            <span>{this.props.business.address}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}