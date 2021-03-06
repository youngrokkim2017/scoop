import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import SearchItems from './search_items';
import { getSearchedBusinesses } from '../../actions/search_actions';
// import SearchHook from './searchbar';

// import BusinessMap from '../business/business_map';
// import BusinessIndex from '../business/business_index';
// import {updateFilter} from '../../actions/filter_actions';

class SearchShortcuts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // input: ""
            find: "",
            near: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.find.length >= 1 || this.state.near.length >= 1) {
            this.props.getSearchedBusinesses(this.state.find)
                .then(() => {
                    this.props.getSearchedBusinesses(this.state.near)
                        .then(() => {
                            this.props.history.push(`/search=${this.state.find}+${this.state.near}`)
                        })
                })
        } else {
            this.props.history.push('/businesses')
        }
    }

    handleChange(type) {
        // console.log("searching");
        return (e) => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    render() {
        return (
            <div className="search=splash-extras">
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

                        <div className="favorites-saltstraw">
                            <div className="saltstraw-photo">

                            </div>
                            <div className="saltstraw-info">
                                <Link to="/businesses/1">
                                    Salt & Straw
                                    {/* {this.props.businesses.name} */}
                                </Link>
                            </div>
                        </div>

                        <div className="favorites-fentons">
                            <div className="fentons-photo">

                            </div>
                            <div className="fentons-info">
                                <Link to="/businesses/2">
                                    Fentons
                                    {/* {this.props.businesses.name} */}
                                </Link>
                            </div>
                        </div>

                        <div className="favorites-birite">
                            <div className="birite-photo">

                            </div>
                            <div className="birite-info">
                                <Link to="/businesses/3">
                                    Bi-Rite Creamery
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
        )
    }
}

export default SearchShortcuts;