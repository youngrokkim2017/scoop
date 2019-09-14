import React from 'react';
import { withRouter, Link } from "react-router-dom";

export default class BusinessMap extends React.Component {
    constructor(props) {
        super(props) ;
    }

    componentDidMount() {
        //sets the map to show sf
        const mapOptions = {
            center: {lat: 37.7758, lng: -122.435},
            zoom: 13
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render() {
        return (
            <div ref={map => this.mapNode = map} > 
                Map
            </div>
        )
    }
}