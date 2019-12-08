import React from 'react';
import { Link } from 'react-router-dom';

const SearchItems = ({key}) => (
    <div className="search-items">
        {/* <img src={key.profPic} alt="" /> */}
        <div>
            <Link id="search-links" to={`/businesses/${key.id}`}>
                <li>{key.name}</li>
            </Link>
        </div>
    </div>
)

export default SearchItems;