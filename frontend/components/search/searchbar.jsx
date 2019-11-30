import React, { useState, useEffect } from 'react';

const SearchHook = props => {
    const [searching, setSearching] = useState('');

    const { getBusinesses, history } = props;

    const handleSubmit = (e) => {
        e.preventDefault();

        getBusinesses(searching.toLowerCase())
            .then(() => {
                history.push('/search')
            })
    }

    const handleChange = () => (
        e => setSearching(e.target.value)
    );

    const SearchBar = (
        <div>
            <form className="search-bar">
                <label className="search-find">
                    <span className="find-text">Find</span>
                    <input
                        className="find-container"
                        type="text"
                        onChange={handleChange()}
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
                        onChange={handleChange()}
                        placeholder="address, city, state, or zip..."
                    />
                </label>
                {/* <input className="search-button" type="submit" onClick={this.handleSubmit}/> */}
                {/* <Link to="/businesses">Search</Link> */}
                <button className="search-button" onClick={handleSubmit()}>Search</button>
                {/* <button className="search-button" onClick={handleSubmit()}>	&#128270;</button> */}
            </form>
        </div>
    );

    return SearchBar;
}

export default SearchHook;

// const Search = () => {
//     const [searching, setSearching] = useState(false);
//     const [keywords, setKeywords] = useState('');

//     useEffect(() => {
//         if (searching && keywords != '') {
//             console.log('Search for keywords: ', keywords);
//             // this is where we would call an API to perform the search
//             return () => {
//                 setSearching(false);
//             };
//         }
//     });

//     return (
//         <div className="search">
//             <input type="search" value={keywords} onChange={e => setKeywords(e.target.value)} />
//             <button onClick={() => setSearching(true)}>Search</button>
//         </div>
//     );
// };

// export default Search;