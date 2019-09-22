import React from 'react';
import { Link } from 'react-router-dom';
import BusinessMap from './business_map';

export default class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusinesses(this.props.match.params.businessId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.fetchBusinesses(this.props.match.params.businessId)
        }
    }

    render() {
        return (
            <div className="business-show">

            </div>
        )
    }
}