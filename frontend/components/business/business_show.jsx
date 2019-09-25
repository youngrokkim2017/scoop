import React from 'react';
import { Link } from 'react-router-dom';
import BusinessMap from './business_map';

export default class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusinesses(this.props.match.params.businessId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.fetchBusinesses(this.props.match.params.businessId)
        }
    }

    render() {
        return (
            <div className="business-show">
                <div className="business-map">
                    <Link to="/">Back to Busiesses</Link>
                    <BusinessMap
                        businesses={businesses}
                        businessId={businessId}
                        fetchBusiness={fetchBusiness}
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
                        <span>{`${business.phone_number}`}</span>
                    </div>

                    <div className="business-price">
                        <span>Price</span>
                        <span>{`${business.price_range}`}</span>                        
                    </div>

                    <div className="business-credit-card">
                        <span>Credit Card</span>
                        <span>{`${business.credit_card}`}</span>
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
                        <span>{`${business.open_time}`}</span>
                    </div>

                    <div className="business-close">
                        <span>Close</span>
                        <span>{`${business.close_time}`}</span>
                    </div>
                </div>
            </div>
        )
    }
}