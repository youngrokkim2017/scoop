import React from 'react';
import BusinessIndexItem from './business_index_item';
import BusinessMap from './business_map';
import NavBar from '../nav_bar/nav_bar';

export default class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        const { businesses } = this.props;
        console.log(this.props.businesses)
        const businessItems = this.props.businesses.map(business => (
            <BusinessIndexItem key={business.id} business={business} />)
        );

        return (
            <div>
                <div className="business-index">
                    <div className="businesses-list">
                        <ul>
                            {businessItems}
                        </ul> 
                    </div>
                
                    <div className="business-map">
                        <BusinessMap business={this.props.businesses} />
                    </div>
                </div>

                <div className="navbar">
                    <NavBar />
                    <div className="navbar-items">
                        <ul className="navbar-businesses">
                            {/* {businesses} */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}