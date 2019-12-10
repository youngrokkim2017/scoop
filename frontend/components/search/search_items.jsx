import React from 'react';
import { Link } from 'react-router-dom';

const SearchItems = ({items}) => (
    <div className="search-items">
        <div className="search-items-contents">
            <Link className="search-items-results" to={`/businesses/${items.id}`}>
                <img className="search-items-img" src={items.photoUrl} alt="" /> 
                <li>{items.name}</li>
            </Link>
        </div>
    </div>
)

export default SearchItems;