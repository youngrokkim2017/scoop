import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

export default class BusinessForm extends React.Component {
    constructor(props) {
        super(props);
        this.coords = { lat: props.lat, lng: props.lng };
        this.state = {};


    }

    render() { //???
        return (
            <div>

            </div>
        );
    }
}