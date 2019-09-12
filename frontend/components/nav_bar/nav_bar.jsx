import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className="signup-login">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
        </div>
    );

    const loggedInLinks = () => (
        <div className="header">
            <h1 className="header-user">Welcome {currentUser.username}</h1>
            <button className="header-button" onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? loggedInLinks() : sessionLinks();
}

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