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

        this.state = {
            // input: ""
            find: "",
            near: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.find.length >= 1 || this.state.near.length >= 1) {
            this.props.getSearchedBusinesses(this.state.find)
                .then(() => {
                    this.props.getSearchedBusinesses(this.state.near)
                        .then(() => {
                            this.props.history.push(`/search=${this.state.find}+${this.state.near}`)
                        })
                })
        } else {
            this.props.history.push('/businesses')
        }
    }

    handleChange(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

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
                    {/* <NavBar /> */}

                    <div className="navbar-container">
                        <div className="default-navbar">

                            <div className="nav-logo">
                                <Link to="/">scoop</Link>
                            </div>

                            <form className="nav-search-bar">
                                <label className="nav-search-find">
                                    <span className="nav-find-text">Find</span>
                                    <input
                                        className="nav-find-container"
                                        type="text"
                                        onChange={this.handleChange('find')}
                                        placeholder="ice cream, frozen yogurt, gelato..." //shaved ice, soft serve, ..etc
                                    // value={this.state.find} 
                                    />
                                </label>

                                <label className="nav-search-near">
                                    <span className="nav-near-text">Near</span>
                                    <input
                                        className="nav-near-container"
                                        type="text"
                                        onChange={this.handleChange('near')}
                                        placeholder="address, city, state, or zip..."
                                    // value={this.state.near} 
                                    />
                                </label>
                                <button className="nav-search-button" onClick={this.handleSubmit}>Search</button>
                            </form>

                            <div className="nav-user">
                                {this.props.loggedIn ?

                                    <div>
                                        <nav className="logout-dropdown">
                                            <button className="dropbtn">Welcome, {currentUser.firstName}
                                                <img className="profile-pic" src={this.props.user.photoUrl} alt=""/>
                                                <i className="fa fa-caret-down"></i>
                                            </button>
                                            <div className="logout-dropdown-content">
                                                <a className="logout-link" onClick={this.props.logout}>Log Out</a>
                                            </div>
                                        </nav>
                                    </div>

                                    :

                                    <div>

                                        <nav className="navbar-signup-login">
                                            <Link to="/login" className="navbar-login">Log In</Link>
                                            <Link to="/signup" className="navbar-signup">Sign Up</Link>
                                        </nav>
                                    </div>
                                }
                            </div>

                        </div>
                    </div>

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