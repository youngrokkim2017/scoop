import React from 'react';
import { withRouter, Link } from 'react-router-dom';
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

        this.props.history.push(`/search/${this.state.find}+${this.state.near}`);

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
                            placeholder="desserts, ice cream, frozen yogurt, gelato..." //shaved ice, soft serve, ..etc
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
                <div className="search-shortcuts">
                    <a onClick={this.handleSubmit}>Creamery</a>
                    <a onClick={this.handleSubmit}>Frozen Yogurt</a>
                    <a onClick={this.handleSubmit}>Gelato</a>
                    <a onClick={this.handleSubmit}>Shaved Ice</a>
                </div>

                <div className="favorites">
                    <div className="favorites-header">
                        <h2>Favorites</h2>
                    </div>

                    <div className="favorites-list">
                        <div className="favorites-birite">
                            <div className="birite-photo">

                            </div>
                            <div className="birite-info">
                                <Link to="/businesses/1">
                                    Bi-Rite Creamery
                                    {/* {this.props.businesses.name} */}
                                </Link>
                            </div>
                        </div>

                        <div className="favorites-saltstraw">
                            <div className="saltstraw-photo">
                            
                            </div>
                            <div className="saltstraw-info">
                                <Link to="/businesses/3">
                                    Salt & Straw
                                    {/* {this.props.businesses.name} */}
                                </Link>
                            </div>
                        </div>

                        <div className="favorites-fentons">
                            <div className="fentons-photo">

                            </div>
                            <div className="fentons-info">
                                <Link to="/businesses/4">
                                    Fentons
                                    {/* {this.props.businesses.name} */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="to-all-businesses">
                    <Link to="/businesses">See more businesses</Link>
                </div>
            </div>
        );
    }
}

// export default Search;
export default withRouter(Search);
