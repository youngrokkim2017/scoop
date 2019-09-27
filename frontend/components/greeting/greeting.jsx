import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="signup-login">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
        </nav>
    );

    const homeGreeting = () => (
        <div className="home-greeting">
            <h3 className="greeting-msg">Welcome, {currentUser.useranme}</h3>
            <button className="greeting-button" onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? homeGreeting() : sessionLinks();
}

export default Greeting;