import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
// import SearchShortcuts from '../search/search_shortcuts';
// import splashLogo from '../../../app/assets/images/splash.jpg';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let coverPhotos = [window.splash, window.background_1, window.background_2]
        // let shufflePhotos = Math.floor(Math.random() * Math.floor(3))

        // console.log(this.props);

        // const splashLogo = require('../../../app/assets/images/splash.jpg');

        return (
            <div className="home">
                
                {/* <img className="home-cover-photo" src={splashLogo} alt=""/> */}
                {/* <img src="home-cover-photo" src="window.splash" alt=""/> */}
                {/* <img className="home-cover-photo" src={coverPhotos[shufflePhotos]} alt=""/> */}
                 
                <div className="session-navbar">

                    {/* <div className="session-navbar-contents"> */}

                    <div className="github-link">
                        <a href="https://github.com/youngrokkim2017">Github</a>
                    </div>

                    { this.props.loggedIn ? 
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

                        <nav className="signup-login">
                            <Link to="/login" className="login">Log In</Link>
                            <Link to="/signup" className="signup">Sign Up</Link>
                        </nav>
                    }

                    {/* </div> */}

                </div>

                <div className="logo">
                    <header className="header-title">
                        <Link to="/">
                            {/* <span><h1>scoop🍦🍨</h1></span> */}
                            <span><h1>scoop  🍨</h1></span> 
                        </Link>
                    </header>
                </div>

                <div className="greeting-search">
                    <SearchContainer />
                </div>
            </div>
        );
    }
}

export default Greeting;

// add emojis: control + cmd + space

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

