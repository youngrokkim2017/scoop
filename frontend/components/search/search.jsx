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

        this.props.history.push(`/search?find=${this.state.find}+near=${this.state.near}`);

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
                            className="find-container"
                            type="text" 
                            onChange={this.handleChange('find')} 
                            value={this.state.find} 
                            placeholder="ice cream, frozen yogurt, gelato..."
                            />
                    </label>
                    {/* <div>
                        <span className="search-divider">|</span>
                    </div> */}
                    <label className="search-near">
                        <span className="near-text">Near</span>
                        <input 
                            className="near-container"
                            type="text" 
                            onChange={this.handleChange('near')} 
                            value={this.state.near} 
                            placeholder="address, city, state, or zip..."
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
