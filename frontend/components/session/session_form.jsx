import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            // sessionErrors: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    componentDidMount() {
        let errors = document.getElementsByClassName("session-errors");
        errors = Array.from(errors);

        errors.forEach(error => {
            error.classList.add('hide');
        })
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.errors !== prevProps.errors) {
    //         this.props.errors = prevProps.errors
    //     }
    // }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.dispatchForm(user);

        let errors = document.getElementsByClassName("session-errors");
        errors = Array.from(errors);
        errors.forEach(error => {
            error.classList.remove("hide");
        });

    }

    handleInput(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    // // logging in a demo user??
    handleDemoUser(e) {
        e.preventDefault();
        this.setState({
            email: "",
            password: ""
        })
        let email = "patrick@email.com";
        let password = "123456";

        // setTimeout(() => this.inputEmail, 1000);
        // setTimeout(() => this.inputPassword, 1000);

        this.props.demoLogin(this.state);
    }

    // inputEmail(email) {
    //     let emailChars = email.split('');

    //     setInterval(() => {
    //         this.setState({email: this.state.email + emailChars.shift()})
    //     }, 1000);
    // }

    // inputPassword(password) {
    //     let passwordChars = password.split('');

    //     setInterval(() => {
    //         this.setState({ password: this.state.password + passwordChars.shift() })
    //     }, 1000);
    // }
    //

    render() {
        let { formType } = this.props;

        let invalidFnError = "";
        let invalidLnError = "";
        let invalidEmailError = "";
        let invalidPasswordError = "";

        // if (this.props.errors.length > 0) {
        //     for (let i = 0; i < this.props.errors.length; i++) {
        //         let sessionError = this.props.errors[i];
        //         this.state.sessionErrors << error;
        //     }
        //     console.log(this.state.sessionErrors);
        // }

        // console.log(this.props.errors);
        if (this.props.errors.length > 0) {
            this.props.errors.forEach(err => {
                if (err.includes('First')) invalidFnError += err
                if (err.includes('Last')) invalidLnError += err
                if (err.includes('Email')) invalidEmailError += err
                if (err.includes('Password')) invalidPasswordError += err
            })
        }

        return(
            <div className="session-form">

                    <header className="session-form-header">
                        <Link to="/">
                            {/* <span>scoop</span> */}
                            <span><h3>scoop</h3></span>
                        </Link>
                    </header>

                <div className="session-form-content">

                <div className="session-form-textbox">
                    <div className="session-info">
                        <h1 className="formtype-header">{this.props.formType} to scoop</h1>
                        {/* <h1 className="to-scoop">to Scoop</h1> */}

                        {/* <p>
                            {this.state.errors ?
                            errors.map((error) => <li>{error}</li>) : 
                            ""}
                        </p> */}

                        <div className="session-intro">
                            {formType === "sign up" ? "Connect With Great Local Businesses" : "New to scoop? "}
                            {/* {formType === "log in" ? <Link to="/signup">Sign Up</Link> : ""} */}
                            {formType === "log in" ? <Link to="/signup">Sign Up</Link> : <p><Link to="/login">Log In</Link></p>}
                        </div>
                        
                        <div className="demo-login">
                            <p>
                                    <span className="demo-text">Or log in as Demo User</span>
                                    {/* <span className="demo-text"><span><Link to="/login">Log In</Link></span>Or log in as Demo User</span> */}
                            </p>
                            <label>
                                {/* <input className="demo-button" type="submit" onClick={this.props.demoLogin} value="Log In with Demo User" /> */}
                                <input className="demo-button" type="submit" onClick={this.handleDemoUser} value="Log In with Demo User" />
                            </label>
                        </div>

                        <div className="session-continue-text">
                            <span>By continuing, you agree to indulge in sweets</span>
                        </div>
                    </div>
                    

                    <fieldset className="or-divider">
                        <legend>OR</legend>
                    </fieldset>

                    <form className="session-inputs">
                        {/* <p>
                            {this.state.errors ?
                                errors.map((error) => <li>{error}</li>) :
                                ""}
                        </p> */}
                        {formType === "sign up" ?
                            <div>
                                <label className="session-fn">
                                    <input
                                        type="text"
                                        value={this.state.first_name}
                                        onChange={this.handleInput('first_name')}
                                        placeholder="First Name"
                                        className="session-fname-input"
                                    />

                                    {/* <div className="session-errors">{invalidFnError}</div> */}
                                    <p className="session-errors">{invalidFnError}</p>
                                    {/* <div className="errors-div hide"></div> */}
                                </label>
                            </div>
                        :

                        ""
                        }
                        {formType === "sign up" ?
                            <div>
                                <label className="session-ln">
                                    <input
                                        type="text"
                                        value={this.state.last_name}
                                        onChange={this.handleInput('last_name')}
                                        placeholder="Last Name"
                                        className="session-lname-input"
                                    />

                                    {/* <div className="session-errors">{invalidLnError}</div> */}
                                    <p className="session-errors">{invalidLnError}</p>
                                    {/* <div className="errors-div hide"></div> */}
                                </label>
                            </div>

                            : 

                            ""
                        } 
                        {/* <p> */}
                        {/* <br/> */}
                            <label className="session-email">
                                <input 
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                placeholder="Email"
                                className="session-emailpassword-input"
                                />

                            {/* <div className="session-errors">{invalidEmailError}</div> */}
                            <p className="session-errors">{invalidEmailError}</p>
                                {/* <div className="errors-div hide"></div> */}
                            </label>
                        {/* </p> */}
                        {/* <p> */}
                        {/* <br/> */}
                            <label className="session-password">
                                <input 
                                // type="text"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                placeholder="Password"
                                className="session-emailpassword-input"
                                />

                            {/* <div className="session-errors">{invalidPasswordError}</div> */}
                            <p className="session-errors">{invalidPasswordError}</p>
                                {/* <div className="errors-div hide"></div> */}
                            </label>
                        {/* </p> */}
                        {/* <br/> */}
                        {/* <Link className="session-button" to={this.handleSubmit}>{formType}</Link> */}
                        <button className="session-button" onClick={this.handleSubmit}>{formType}</button>
                    </form>
                    {/* <Link to={formType === 'login' ? "/signup" : "/login"}>{formType}</Link> */}

                    <div className="session-intro-footer">
                        {formType === "sign up" ? "Already on Scoop?  " : "New to Scoop?  "}
                        {formType === "sign up" ? <Link to="/login">Log In</Link> : <Link to="/signup">Sign Up</Link>}
                    </div>

                    {/* <div style={{ color: 'red' }}>{this.props.errors}</div> */}
                    {/* <div>{err}</div> */}
                </div>

                <div className="session-form-img">
                    <img src={window.signup} alt=""/>
                </div>

                </div>

                <footer className="footer-img">
                    <img src={window.footer} alt="" />
                </footer>
            </div>
        )
    }
};

export default SessionForm;