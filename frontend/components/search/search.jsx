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
            near: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.history.push(`/search?near=${this.state.find}&find=${this.state.near}`);

        this.setState({
            find: "",
            near: ""
        });
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
                    <label className="search-find">
                        <span className="find-text">Find</span>
                        <input 
                            className="find-search-bar"
                            type="text" 
                            onChange={this.handleChange('find')} 
                            value={this.state.find} 
                            placeholder="ice cream, creamery, frozen yogurt, gelato..."
                            />
                    </label>
                    <label className="search-near">
                        <span className="near-search-bar">Near</span>
                        <input 
                            className="near-search-bar"
                            type="text" 
                            onChange={this.handleChange('near')} 
                            value={this.state.near} 
                            placeholder="address, neighborhood, city, state, or zip"
                            />
                    </label>

                    {/* <input className="search-button" type="submit" onClick={this.handleSubmit}/> */}
                    {/* <Link to="/businesses">Search</Link> */}
                    <button className="search-button" onClick={this.handleSubmit}>Search</button>
                </form>
            </div>
        );
    }
}

// export default Search;
export default withRouter(Search);
