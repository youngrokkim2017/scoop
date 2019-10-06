import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <div className="session-navbar">
                    <div className="github-link">
                        <a href="https://github.com/youngrokkim2017">Github</a>
                    </div>
                    

                    { this.props.loggedIn ? 
                        <div className="signup-login">
                            {/* <a className="github-link" href="https://github.com/youngrokkim2017">Github</a>                             */}
                            <h3 className="greeting-msg">Welcome, {currentUser.firstName}</h3>
                            {/* <button className="logout-button" onClick={this.props.logout}>Log Out</button> */}
                            <a className="logout-link" onClick={this.props.logout}>Log Out</a>
                        </div>

                        :

                        <nav className="signup-login">
                            {/* <a className="github-link" href="https://github.com/youngrokkim2017">Github</a> */}
                            <Link to="/login" className="login">Log In</Link>
                            <Link to="/signup" className="signup">Sign Up</Link>
                        </nav>
                    }
                </div>

                <div className="logo">
                    <header className="header-title">
                        <Link to="/">
                            <span><h1>scoop</h1></span>
                        </Link>
                    </header>
                </div>
            </div>
        );
    }
}

// const Greeting = ({ currentUser, logout }) => {
//     const sessionLinks = () => (
//         <div className="session-navbar">
//             <nav className="signup-login">
//                 <Link to="/signup">Sign Up</Link>
//                 <Link to="/login">Log In</Link>
//             </nav>
//             <header className="header-title">
//                 <Link to="/">
//                     <span><h1>scoop</h1></span>
//                 </Link>
//             </header>
//         </div>
//     );

//     const homeGreeting = () => (
//         <div className="home-navbar">
//             <div className="home-greeting">
//                 <h3 className="greeting-msg">Welcome, {currentUser.useranme}</h3>
//                 <button className="greeting-button" onClick={logout}>Log Out</button>
//             </div>
//             <header className="header-title">
//             <Link to="/">
//                 <span><h1>scoop</h1></span>
//             </Link>
//             </header>
//         </div>
//     );

//     return currentUser ? homeGreeting() : sessionLinks();
// }

export default Greeting;