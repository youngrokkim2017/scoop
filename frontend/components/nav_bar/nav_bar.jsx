import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
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

export default NavBar;

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