import React from 'react';
import { Link } from 'react-router-dom';
import BusinessMap from './business_map';

export default class BusinessShow extends React.Component {
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
                <div className="business-map">
                    <Link to="/">Back to Businesses</Link>
                    <BusinessMap
                        business={business}
                        businessId={business.id}
                        fetchBusiness={this.props.fetchBusiness}
                    />
                </div>

                <div className="business-rating">
                    
                    
                </div>

                <div className="business-info">
                    <div className="business-description">
                        <span>Description</span>
                        <span>{`${business.description}`}</span>                        
                    </div>

                    <div className="business-address">
                        <span>Address</span>
                        <span>{`${business.address}`}</span>
                    </div>
                    
                    <div className="business-website">
                        <span>Website</span>
                        <span>{`${business.website}`}</span>
                    </div>

                    <div className="business-phone">
                        <span>Phone Number</span>
                        <span>{`${business.phoneNumber}`}</span>
                    </div>

                    <div className="business-price">
                        <span>Price</span>
                        <span>{`${business.priceRange}`}</span>                        
                    </div>

                    <div className="business-credit-card">
                        <span>Credit Card</span>
                        <span>{`${business.creditCard}`}</span>
                    </div>

                    <div className="business-parking">
                        <span>Parking</span>
                        <span>{`${business.parking}`}</span>
                    </div>

                    <div className="business-wifi">
                        <span>Wifi</span>
                        <span>{`${business.wifi}`}</span>
                    </div>

                    <div className="business-restroom">
                        <span>Restroom</span>
                        <span>{`${business.restroom}`}</span>
                    </div>

                    <div className="business-open">
                        <span>Open</span>
                        <span>{`${business.openTime}`}</span>
                    </div>

                    <div className="business-close">
                        <span>Close</span>
                        <span>{`${business.closeTime}`}</span>
                    </div>
                </div>
            </div>
        )
    }
}