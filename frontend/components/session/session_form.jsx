import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.dispatchForm(user);
    }

    handleInput(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    // logging in a demo user??
    handleDemoUser(e) {
        e.preventDefault();

    }

    render() {
        let { formType } = this.props;

        return(
            <div className="session-form">

                    <header className="session-form-header">
                        <Link to="/">
                            <span><h3>scoop</h3></span>
                        </Link>
                    </header>

                <div className="session-info">
                    <h1 className="formtype-header">{this.props.formType} to scoop</h1>
                    {/* <h1 className="to-scoop">to Scoop</h1> */}

                    <p>
                        {this.state.errors ?
                        errors.map((errors) => <li>{error}</li>) : 
                        ""}
                    </p>

                    <div className="session-intro">
                        {formType === "sign up" ? "Connect with great local businesses" : "New to scoop? "}
                        {formType === "log in" ? <Link to="/signup">Sign Up</Link> : ""}
                    </div>
                    
                    <div className="demo-login">
                        <p>
                            <span className="demo-text">Or log in as Demo User</span>
                        </p>
                        <label>
                            <input className="demo-button" type="submit" onClick={this.props.demoLogin} value="Demo Log In" />
                        </label>
                    </div>

                    <div>
                        <span>By continuing, you agree to indulge in sweets</span>
                    </div>
                </div>
                

                <fieldset className="or-divider">
                    <legend>OR</legend>
                </fieldset>

                <form className="session-inputs">
                    <p>
                        <label className="session-fn">
                            <input
                                type="text"
                                value={this.state.first_name}
                                onChange={this.handleInput('first_name')}
                                placeholder="First Name"
                            />
                        </label>
                    {/* </p> */}
                    {/* <p> */}
                        <label className="session-ln">
                            <input
                                type="text"
                                value={this.state.last_name}
                                onChange={this.handleInput('last_name')}
                                placeholder="Last Name"
                            />
                        </label>
                    </p>
                    <p>
                        <label className="session-email">
                            <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            placeholder="Email"
                            />
                        </label>
                    </p>
                    <p>
                        <label className="session-password">
                            <input 
                            type="text"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="Password"
                            />
                        </label>
                    </p>
                    {/* <Link className="session-button" to={this.handleSubmit}>{formType}</Link> */}
                    <button className="session-button" onClick={this.handleSubmit}>{formType}</button>
                </form>
                {/* <Link to={formType === 'login' ? "/signup" : "/login"}>{formType}</Link> */}

                <div className="session-intro">
                    {formType === "sign up" ? "Already on Scoop?  " : "New to Scoop?  "}
                    {formType === "sign up" ? <Link to="/login">Log In</Link> : <Link to="/signup">Sign Up</Link>}
                </div>
            </div>
        )
    }
};

export default SessionForm;