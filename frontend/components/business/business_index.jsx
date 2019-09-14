import React from 'React';
import BusinessIndexItem from './business_index_item';

export default class Business extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        const { businesses } = this.props;

        return (
            <div>
                <ul className="businesses-list">
                    {this.props.businesses.map(business => (
                        <BusinessIndexItem key={business.id} bussiness={business} />
                    ))}
                </ul> 
            </div>
        )
    }
}