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

                <h1>{this.props.formType}</h1>

                <p>
                    {this.state.errors ?
                    errors.map((errors) => <li>{error}</li>) : 
                    ""}
                </p>
                
                <div className="demo-login">
                    <label>Log In as Demo User
                        <input type="submit" onClick={this.props.demoLogin} value="Demo Log In" />
                    </label>
                </div>

                <form>
                    <p>
                        <label>
                            <input
                                type="text"
                                value={this.state.first_name}
                                onChange={this.handleInput('first_name')}
                                placeholder="First Name"
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="text"
                                value={this.state.last_name}
                                onChange={this.handleInput('last_name')}
                                placeholder="Last Name"
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            placeholder="Email"
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            <input 
                            type="text"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="Password"
                            />
                        </label>
                    </p>
                    <button onClick={this.handleSubmit}>{formType}</button>
                </form>
                <Link to={formType === 'login' ? "/signup" : "/login"}>{formType}</Link>
            </div>
        )
    }
};

export default SessionForm;