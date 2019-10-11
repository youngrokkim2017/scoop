import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // input: ""
            find: "",
            near: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

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
        return (
            <div className="navbar-container">
                <div className="default-navbar">
                    {/* <div className="github-link">
                        <a href="https://github.com/youngrokkim2017">Github</a>
                    </div> */}

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
                                placeholder="desserts, ice cream, frozen yogurt, gelato..." //shaved ice, soft serve, ..etc
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
                        {/* <input className="search-button" type="submit" onClick={this.handleSubmit}/> */}
                        {/* <Link to="/businesses">Search</Link> */}
                        <button className="nav-search-button" onClick={this.handleSubmit}>Search</button>
                    </form>

                    <div className="nav-user">
                    {this.props.loggedIn ?
                        // <div className="signup-login">
                        //     <h3 className="greeting-msg">Welcome, {currentUser.firstName}</h3>
                        //     {/* <button className="logout-button" onClick={this.props.logout}>Log Out</button> */}
                        //     <a className="logout-link" onClick={this.props.logout}>Log Out</a>
                        // </div>

                        <div className="logout-dropdown">
                            <button className="dropbtn">Welcome, {currentUser.firstName}
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="logout-dropdown-content">
                                <a className="logout-link" onClick={this.props.logout}>Log Out</a>
                            </div>
                        </div>

                        :
                        <div>
                            {/* <div className="navbar-demo-login">
                                <label>
                                    <input className="navbar-demo-button" type="submit" onClick={this.props.demoLogin} value="Demo Log In" />
                                </label>
                            </div> */}

                            <nav className="navbar-signup-login">
                                <Link to="/login" className="navbar-login">Log In</Link>
                                <Link to="/signup" className="navbar-signup">Sign Up</Link>
                                {/* <a className="navbar-demo-button" onClick={this.props.demoLogin}>Demo Log In</a> */}
                            </nav>
                        </div>
                    }
                    </div>

                </div>
            </div>
        )
    }
}

// export default NavBar;
export default withRouter(NavBar);

///////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = ({ currentUser, logout }) => {
//     const sessionLinks = () => (
//         <div className="signup-login">
//             <Link to="/login">Log In</Link>
//             <Link to="/signup">Sign Up</Link>
//         </div>
//     );

//     const loggedInLinks = () => (
//         <div className="header">
//             <h1 className="header-user">Welcome {currentUser.username}</h1>
//             <button className="header-button" onClick={logout}>Log Out</button>
//         </div>
//     );

//     return currentUser ? loggedInLinks() : sessionLinks();
// };

// export default NavBar;

///////////////////////////////////////////////////////////////////////////////

/*
export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { currentUser } = this.props;

        return (
            <div>
                <h1>{currentUser} ? `Welcome, ${currentUser.username}!` : ""}</h1>

                {currentUser ? <button onClick={this.props.logout}>Log Out</button> :
                    <div>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login">Log In</Link>
                    </div>
                }
            </div>
        )
    }
}
*/