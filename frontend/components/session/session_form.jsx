class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
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
            <div>
                <h1>{this.props.formType}</h1>

                <p>
                    {this.state.errors ?
                    errors.map((errors) => <li>{error}</li>) : 
                    ""}
                </p>

                <form>
                    <label>Username
                        <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Password
                        <input 
                        type="text"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick="{this.handleSubmit}">{formType}</button>
                </form>
                <Link to={formType === 'login' ? "/signup" : "/login"}>{formType}</Link>
            </div>
        )
    }
}