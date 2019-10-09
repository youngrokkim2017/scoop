import React from 'react';
import { Link } from 'react-router-dom';

const SearchItems = ({items}) => (
    <div className="search-items">
        {/* <img src={items.profPic} alt="" /> */}
        <div>
            <Link id="search-links" to={`/businesses/${items.id}`}>
                <li>{items.name}</li>
            </Link>
        </div>
    </div>
)

export default SearchItems;