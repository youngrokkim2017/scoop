import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            find: "",
            near: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(input) {
        this.props.getSearchedBusinesses(input)
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.find.length >= 1 || this.state.near.length >= 1) {
            this.props.getSearchedBusinesses(this.state.find)
                .then(() => {
                    // this.props.getSearchedBusinesses(this.state.near)
                    //     .then(() => {
                            this.props.history.push(`/search`)
                        // })
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

        const businessItems = this.props.searchResults.map(business => (
            <SearchIndexItem key={business.id} business={business} />)
        );

        // let searchResults = this.props.searchResults.map((items) => {
        //     return <SearchItems key={items.id} items={items} />
        // });

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
                                        <nav className="navbar-logout-dropdown">
                                            {/* <button className="navbar-dropbtn">Welcome, <span className="navbar-drop-user">{currentUser.firstName}</span> */}
                                            <button className="navbar-dropbtn">Welcome, {currentUser.firstName}
                                                {/* <img className="profile-pic" src={this.props.currentUser.photoUrl} alt=""/> */}
                                                <i className="navbar-fa fa-caret-down"></i>
                                            </button>
                                            <div className="navbar-logout-dropdown-content">
                                                <a className="navbar-logout-link" onClick={this.props.logout}>Log Out</a>
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
                <footer className="footer-img">
                    <img src={window.footer} alt="" />
                </footer>
            </div>
        )
    }
}

export default SearchIndex;