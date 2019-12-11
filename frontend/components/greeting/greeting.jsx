import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import SearchItems from '../search/search_items';
// import SearchShortcuts from '../search/search_shortcuts';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLogout() {
        this.props.logout()
            .then(() => {
                this.props.history.push(`/`)
            });
    }

    render() {
        let coverPhotos = [window.splashBackground_2, window.splashBackground, window.splash3, window.splash4, window.splash5, window.splash6]
        // let shufflePhotos = Math.floor(Math.random() * Math.floor(6))
        let shufflePhotos = Math.floor(Math.random() * coverPhotos.length)

        let searchResults = this.props.searchResults.map((items) => {
            return <SearchItems key={items.id} items={items} />
        });

        // console.log(searchResults)

        return (
            <div className="home">
                
                {/* <img src={window.splashBackground} alt=""/> */}
                <div className="splash-background-contents">
                    <div className="splash-background-cover">
                        {/* <img src={window.splashBackground} alt="" /> */}
                        {/* <img src={coverPhotos[shufflePhotos]} alt="" /> */}
                        <img src={window.splash3} alt="" />
                    </div>
                 
                    <div className="splash-contents">
                        <div className="session-navbar">

                            {/* <div className="session-navbar-contents"> */}

                            <div className="github-linkedin-link">
                                {/* <a href="https://github.com/youngrokkim2017">Github</a> */}
                                {/* <a href="https://github.com/youngrokkim2017/scoop">GitHub</a> */}
                                <a href="https://github.com/youngrokkim2017/scoop">
                                    <img src={window.github} alt=""/>
                                </a>
                                {/* <a href="https://www.linkedin.com/in/patrick-kim-youngrok/">LinkedIn</a> */}
                                <a href="https://www.linkedin.com/in/patrick-kim-youngrok/">
                                    <img src={window.linkedin} alt=""/>
                                </a>
                            </div>

                            { this.props.loggedIn ? 
                                // <div className="signup-login">
                                //     <h3 className="greeting-msg">Welcome, {currentUser.firstName}</h3>
                                //     {/* <button className="logout-button" onClick={this.props.logout}>Log Out</button> */}
                                //     <a className="logout-link" onClick={this.props.logout}>Log Out</a>
                                // </div>

                                <div>
                                <div className="logout-dropdown">
                                    <button className="dropbtn">Welcome, {currentUser.firstName}
                                        {/* <img className="splash-profile-pic" src={this.props.user.photoUrl} alt=""/> */}
                                        <i className="fa fa-caret-down"></i>
                                    </button>
                                    <div className="logout-dropdown-content">
                                        <a className="logout-link" onClick={this.props.logout}>Log Out</a>
                                    </div>
                                </div>
                                    <img className="splash-profile-pic" src={this.props.user.photoUrl} alt=""/>
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
                                    {/* <span><h1>scoop  🍨</h1></span>  */}
                                    <span><h1>scoop</h1></span> 
                                </Link>
                            </header>
                        </div>

                        <div className="greeting-search">
                            <SearchContainer />
                        </div>
                    </div>
                </div>

                {/* <footer className="footer-img">
                    <img src={window.footer} alt="" />
                </footer> */}

            </div>
        );
    }
}

export default Greeting;

// add emojis: control + cmd + space

