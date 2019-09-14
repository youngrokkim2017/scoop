import React from 'react';
import BusinessMap from '../business/business_map';
import BusinessIndex from '../business/business_index';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        <div>
            <BusinessMap />
            <BusinessIndex businesses={this.props.businesses} fetchBusinesses={this.props.fetchBusinesses} />
        </div>
    }
}

// export const Search = ({ businesses, bounds, updateFilter }) => {
//     return (
//         <div>
//             <BusinessMap businesses={businesses} updateFilter={updateFilter} />
//             <BusinessIndex businesses={businesses} bounds={bounds} />
//         </div>
//     );
// }