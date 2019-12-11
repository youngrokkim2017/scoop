import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            find: "",
            near: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchInputs = this.handleSearchInputs.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.fetchUser(this.props.match.params.id)
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.find.length >= 1 || this.state.near.length >= 1) {
            this.props.getSearchedBusinesses(this.state.find)
                .then(() => {
                    // this.props.getSearchedBusinesses(this.state.near)
                    //     .then(() => {
                    // this.props.history.push(`/search=${this.state.find}+${this.state.near}`)
                    this.props.history.push(`/search=${this.state.find}`)
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

    handleLogout() {
        this.props.logout()
            .then(() => {
                this.props.history.push(`/`)
            });
    }

    handleSearchInputs() {
        let searchInputs = document.getElementsByClassName('search-results-business');
        searchInputs = searchInputs[0]
        let searchResults = document.getElementsByClassName('search-items');
        searchResults = Array.from(searchResults)

        if (searchInputs !== null || searchInputs !== undefined) {
            searchInputs.classList.remove('hide')
            searchResults.forEach((result) => {
                result.classList.remove('hide')
            })
        }

        this.props.getSearchedBusinesses(this.state.find);
    }

    render() {

        let searchResults = this.props.searchResults.map((items) => {
            return <SearchItems key={items.id} items={items} />
        });

        return (
            <div>
                <div>

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
                                        onInput={this.handleSearchInputs}
                                    />

                                    {this.state.find.length ?
                                        <div className="search-results-business">
                                            {searchResults}
                                        </div>

                                        :

                                        // <div className="search-results"></div>
                                        // <div></div>
                                        ""
                                    }

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

                                    {/* <div className="search-results-business"></div> */}

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
                                                {/* <a className="navbar-logout-link" onClick={this.handleLogout}>Log Out</a> */}
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

                </div>

                <div className="profile-contents">

                </div>
            </div>
        );
    }
}

export default UserProfile;