import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link } from "react-router-dom";
import MarkerManager from '../../util/marker_manager';

export default class BusinessMap extends React.Component {
    constructor(props) {
        super(props) ;

        this.handleClick = this.handleClick.bind(this);
        // this.mapBounds = {
        //     northEast: { lat: , lng: },
        //     southWest: { lat: , lng: }
        // };
    }

    componentDidMount() {
        //sets the map to show sf
        const mapOptions = {
            center: {lat: 37.7758, lng: -122.435},
            zoom: 13
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // this.map.addListener('idle', this.setMapBounds)
        google.maps.event.addListener(this.map, "click", this.handleClick);
        // this.props.updateFilter(this.mapBounds)

        this.MarkerManager = new MarkerManager(this.map);
    }

    handleClick(coords) {
        this.props.history.push({
            pathname: 'businesses/new',
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }

    render() {
        return (
            <div className="busines-map" ref={map => this.mapNode = map}> 
                Map
            </div>
            
            // <div className="map" ref="map">
            //     Map
            // </div>
        )
    }
}

// export default withRouter(BusinessMap);