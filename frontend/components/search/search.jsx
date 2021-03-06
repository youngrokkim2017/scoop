import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import SearchItems from './search_items';
import { getSearchedBusinesses } from '../../actions/search_actions';
// import SearchHook from './searchbar';

// import BusinessMap from '../business/business_map';
// import BusinessIndex from '../business/business_index';
// import {updateFilter} from '../../actions/filter_actions';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // input: ""
            find: "",
            near: ""
            // near: this.props.near
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.handleSearchInputs = this.handleSearchInputs.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusinesses();

        // let searchInputs = document.getElementsByClassName('search-results');
        // searchInputs[0]

        // if (this.props.location.search || this.props.location.pathname === "/" === "businesses") {
        //     if (searchInputs !== null) {
        //         searchInputs.classList.add('hide')
        //     }
        // }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (this.state.find.length >= 1 || this.state.near.length >= 1) {
            this.props.getSearchedBusinesses(this.state.find)
            .then(() => {
                // this.props.getSearchedBusinesses(this.state.near)
                // .then(() => {
                // this.props.history.push(`/search=${this.state.find}+${this.state.near}`)
                // this.props.history.push(`/businesses/search`)
                // this.props.history.push(`/search?${this.state.find}`)
                this.props.history.push('/businesses')
                // })
            })
        } else {
            this.props.history.push('/businesses')
        }

        // let find = this.state.find.split(' ').join('-');
        // let near = this.state.near.split(' ').join('-');

        // this.props.updateFilter('near', this.state.near)
        //     .then(() => {
        //         this.props.updateFilter('find', this.state.find)
        //             .then(() => {
        //                 this.props.history.push(`/businesses=${find}`);
        //             })
        //     })
    }

    handleSearchInputs() {
        let searchInputs = document.getElementsByClassName('search-results');
        searchInputs = searchInputs[0]
        let searchResults = document.getElementsByClassName('search-items');
        searchResults = Array.from(searchResults)

        if (searchInputs !== null || searchInputs !== undefined) {
            searchInputs.classList.remove('hide')
            searchResults.forEach((result) => {
                result.classList.remove('hide')
            })
        } else if (this.state.find.length < 2) {
            searchInputs.classList.add('hide')
            searchResults.forEach((result) => {
                result.classList.add('hide')
            })
        }

        this.props.getSearchedBusinesses(this.state.find);
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
        console.log(this.props)

        // let searchResults = this.props.searchResults;
        // console.log(searchResults);

        // console.log(searchResults = this.props.searchResults.map((search) => {
        //     Object.keys(cream)
        // }))

        let searchResults = this.props.searchResults.map((items) => {
            return <SearchItems key={items.id} items={items} />
        });
        
        // console.log(this.props.businesses)

        // const businesses = [];

        // fetch(this.props.businesses)
        //     .then(blob => blob.json())
        //     .then(data => businesses.push(...data))

        // function findMatches(wordToMatch, businesses) {
        //     return businesses.filter(business => {
        //         const regex = new RegExp(wordToMatch, 'gi')
        //         return business.name.match(regex)
        //     })
        // }

        // function displayMatches() {
        //     const matchArray = findMatches(this.value, businesses);
        //     const html = matchArray.map(business => {
        //         const regex = new RegExp(this.value, 'gi')
        //         const businessName = business.name.replace(regex, `<span className="h1">${this.value}</span>`);

        //         return `
        //             <li>
        //                 <span className="name">${businessName}</span>
        //             </li>
        //         `
        //     })
            
        // }

        // const searchInput = document.querySelector('.search');
        // const suggestions = document.querySelector('.suggestions');

        // searchInput.addEventListener('change', displayMatches);
        // searchInput.addEventListener('keyup', displayMatches);

        return (
            <div>
                <form className="search-bar">
                    <label className="search-find">
                        <span className="find-text">Find</span>
                        <input 
                            className="find-container"
                            type="text" 
                            onChange={this.handleChange('find')} 
                            placeholder="desserts, ice cream, frozen yogurt, gelato..." //shaved ice, soft serve, ..etc
                            // value={this.state.find} 
                            onInput={this.handleSearchInputs}
                            // style={{ borderBottom: '1px solid black' }}
                            />

                        {this.state.find.length ?
                            <div className="search-results">
                                {searchResults}
                            </div>

                            :

                            // <div className="search-results"></div>
                            ""
                        }

                    </label>
                
                    <label className="search-near">
                        <span className="near-text">Near</span>
                        <input 
                            className="near-container"
                            type="text" 
                            onChange={this.handleChange('near')} 
                            placeholder="address, city, state, or zip..."
                            // value={this.state.near} 
                            />

                        {/* <div className="search-results"></div> */}

                    </label>
                    {/* <input className="search-button" type="submit" onClick={this.handleSubmit}/> */}
                    {/* <Link to="/businesses">Search</Link> */}
                    <button className="search-button" onClick={this.handleSubmit}>Search</button>
                    {/* <button className="search-button" onClick={this.handleSubmit}>
                        <span className="search-icon">&#9906;</span>
                    </button> */}
                </form>

                {/* <div>
                    <SearchHook />
                </div> */}

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
                            <div className="favorite-photo">
                                <img src={window.oneFav} alt=""/>
                            </div>
                            <div className="saltstraw-info">
                                <Link to="/businesses/1">
                                    Salt & Straw
                                    {/* {this.props.businesses.name} */}
                                </Link>
                                {/* <div className="favorite-rating">
                                    <img src={window.} alt=""/>
                                </div> */}
                                <div className="favorite-category">
                                    <span>$  -  </span>
                                    <span>Creamery</span>
                                </div>
                                <div className="favorite-location">
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                        </div>

                        <div className="favorites-fentons">
                            <div className="favorite-photo">
                                <img src={window.twoFav} alt="" />
                            </div>
                            <div className="fentons-info">
                                <Link to="/businesses/2">
                                    Fentons
                                    {/* {this.props.businesses.name} */}
                                </Link>
                                {/* <div className="favorite-rating">
                                    <img src={window.} alt="" />
                                </div> */}
                                <div className="favorite-category">
                                    <span>$$  -  </span>
                                    <span>Creamery, Restaurant</span>
                                </div>
                                <div className="favorite-location">
                                    <span>Oakland, CA</span>
                                </div>
                            </div>
                        </div>

                        <div className="favorites-birite">
                            <div className="favorite-photo">
                                    <img src={window.threeFav} alt="" />
                            </div>
                            <div className="birite-info">
                                <Link to="/businesses/3">
                                    Bi-Rite Creamery
                                    {/* {this.props.businesses.name} */}
                                </Link>
                                {/* <div className="favorite-rating">
                                    <img src={window.} alt="" />
                                </div> */}
                                <div className="favorite-category">
                                    <span>$  -  </span>
                                    <span>Creamery, Soft Serve</span>
                                </div>
                                <div className="favorite-location">
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div className="to-all-businesses">
                    <Link to="/businesses">See more businesses</Link>
                </div>

                {/* <form class="search-form">
                    <input type="text" className="search" placeholder="City or State" />
                    <ul className="suggestions">
                        <li>Filter for a city</li>
                        <li>or a state</li>
                    </ul>
                </form> */}
                
                <footer className="footer-img">
                    <img src={window.footer} alt=""/>
                </footer>
            </div>
        );
    }
}

// export default Search;
export default withRouter(Search);