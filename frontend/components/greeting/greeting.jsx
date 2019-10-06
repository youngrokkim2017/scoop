import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className="session-navbar">
            <nav className="signup-login">
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </nav>
            <header className="header-title">
                <Link to="/">
                    <span><h1>scoop</h1></span>
                </Link>
            </header>
        </div>
    );

    const homeGreeting = () => (
        <div className="home-navbar">
            <div className="home-greeting">
                <h3 className="greeting-msg">Welcome, {currentUser.useranme}</h3>
                <button className="greeting-button" onClick={logout}>Log Out</button>
            </div>
            <header className="header-title">
            <Link to="/">
                <span><h1>scoop</h1></span>
            </Link>
            </header>
        </div>
    );

    return currentUser ? homeGreeting() : sessionLinks();
}

export default Greeting;