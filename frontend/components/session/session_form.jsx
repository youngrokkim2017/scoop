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
        this.props.processForm(user);
    }

    handleInput(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    render() {
        let { formType } = this.props;

        return(
            <div className="session-form">
                <h1>{this.props.formType}</h1>

                <p>
                    {this.state.errors ?
                    errors.map((errors) => <li>{error}</li>) : 
                    ""}
                </p>

                <form>
                    <label>Email
                        <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>first_name
                        <input
                            type="text"
                            value={this.state.first_name}
                            onChange={this.handleInput('first_name')}
                        />
                    </label>
                    <label>last_name
                        <input
                            type="text"
                            value={this.state.last_name}
                            onChange={this.handleInput('last_name')}
                        />
                    </label>
                    <label>Password
                        <input 
                        type="text"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>{formType}</button>
                </form>
                <Link to={formType === 'login' ? "/signup" : "/login"}>{formType}</Link>
            </div>
        )
    }
};

export default SessionForm;