import React from 'react';
import BusinessIndexItem from './business_index_item';
import BusinessMap from './business_map';
import NavBar from '../nav_bar/nav_bar';
import { Link } from 'react-router-dom';

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     find = "",
        //     near = ""
        // };
    }

    componentDidMount() {
        this.props.fetchBusinesses();

        // if (this.props.location.search !== "") {
        //     let searchArr = this.handleSearchInput(this.props.history.location.search)
        //     let find = searchArr[0];
        //     let near = searchArr[1];

        //     this.props.getSearchedBusinesses(find)
        //         // .then(() => {
        //         //     this.props.getSearchedBusinesses(near)
        //         // })
        // } else if (this.props.location.search === "") {
        //     this.props.fetchBusinesses;
        // }
    }

    // handleSearchInput(search) {
    //     let inputs = search.split('=').slice(1);
    //     let input = inputs.split('+');
    //     let find = input[0];
    //     let near = input[1];

    //     return [find, near];
    // }

    render() {
        const { businesses } = this.props;
        let { business } = this.props;

        // console.log(this.props.businesses)
        // console.log(this.props.business)
        const businessItems = this.props.businesses.map(business => (
            <BusinessIndexItem key={business.id} business={business} />)
        );

        // console.log(this.props);
        // console.log(this.props.currentUser);
        
        // let filteredBusinesses = this.props.businesses.filter((filteredBusiness) => {
        //     return filteredBusiness.name.indexOf(this.state.find) !== -1
        // });

        return (
            <div className="business-index-render">
                <div className="business-index-navbar">
                    <NavBar />
                    {/* <NavBar className="index-navbar"/> */}
                    {/* <div className="session-navbar-items">
                        <ul className="navbar-businesses">
                            {businesses}
                        </ul>
                    </div> */}
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
                        <BusinessMap 
                            businesses={this.props.businesses} 
                            // key={business.id}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default BusinessIndex;