import React from 'react';
import { withRouter } from 'react-router-dom';
// import BusinessMap from '../business/business_map';
// import BusinessIndex from '../business/business_index';
// import {updateFilter} from '../../actions/filter_actions';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            find: "",
            near: this.props.near
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.filter('near', this.state.near)
            .then(() => {
                this.props.filter('find', this.state.find)
                    .then(() => {
                        this.props.history.replace('/businesses')
                    })
            })
    }

    handleChange(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    render() {

        return (
            <div>
                <form className="search-bar">
                    <label className="search-find">Find
                        <input 
                            type="text" 
                            onChange={this.handleChange('find')} 
                            value={this.state.find} 
                            placeholder="name, ice cream, creamery, frozen yogurt, gelato..."
                            />
                    </label>
                    <label className="search-near">Near
                        <input 
                            type="text" 
                            onChange={this.handleChange('near')} 
                            value={this.state.near} 
                            placeholder="address, neighborhood, city, state, or zip"
                            />
                    </label>

                    {/* <input className="search-button" type="submit" onClick={this.handleSubmit}/> */}
                    <Link to="/businesses">Search</Link>
                </form>
            </div>
        );
    }
}

export default withRouter(Search);
