import React from 'react';
import BusinessIndexItem from './business_index_item';
import BusinessMap from './business_map';
import NavBar from '../nav_bar/nav_bar';
import { Link } from 'react-router-dom';

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        const { businesses } = this.props;
        let { business } = this.props;
        console.log(this.props.businesses)
        const businessItems = this.props.businesses.map(business => (
            <BusinessIndexItem key={business.id} business={business} />)
        );

        return (
            <div className="business-index-render">
                <div>
                    <NavBar />
                    <div className="session-navbar-items">
                        <ul className="navbar-businesses">
                            {/* {businesses} */}
                        </ul>
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
                    {/* <div className="sub-navbar-right">
                        <Link to={`/businesses/${business.id}/reviews`}>Write a Review</Link> */}
                        {/* <Link to="/">Home</Link> */}
                        {/* <Link to="/businesses">Back to Businesses</Link>
                    </div> */}
                </div>

                <div className="business-index">
                    <div className="businesses-list">
                        <ul className="business-list-sections">
                            {businessItems}
                        </ul> 
                    </div>
                
                    <div className="business-index-map">
                        <BusinessMap businesses={this.props.businesses} />
                    </div>
                </div>
            </div>
        )
    }
}

export default BusinessIndex;