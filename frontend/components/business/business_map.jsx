import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link } from "react-router-dom";
import MarkerManager from '../../util/marker_manager';

// const mapOptions = () => {
//     if (this.props.businesses.size === 1) {
//         return {
//             center: {
//                 lat: this.props.businesses[0].lat,
//                 lng: this.props.businesses[0].lng
//             },
//             zoomOptions: {
//                 position: google.maps.ControlPosition.TOP_LEFT
//             },
//             zoomFunction: this.props.zoom
//         };
//     } else {
//         return ({
//             center: {
//                 lat: 37.773972,
//                 lng: -122.431297
//             },
//             zoom: 13
//         })
//     }
// };

class BusinessMap extends React.Component {
    constructor(props) {
        super(props);
    }

    mapOptions() {
        if (this.props.businesses.size === 1) { 
            return {
                center: {
                    lat: this.props.businesses[0].lat,
                    lng: this.props.businesses[0].lng
                },
                zoom: 13,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.TOP_CENTER
                },
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                scaleControl: true,
                streetViewControl: true,
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                },
                fullscreenControl: true
            };
        } else {
            return ({
                center: {
                    lat: 37.773972,
                    lng: -122.431297
                },
                zoom: 13
            })
        }
    };

    componentDidMount() {
        //sets the map to show sf
        // const mapOptions = {
        //     center: {lat: 37.7758, lng: -122.435},
        //     zoom: 13
        // }

        const mapOptionFunc = this.mapOptions();

        // this.map = new google.maps.Map(this.mapNode, mapOptionFunc);
        this.map = new google.maps.Map(document.getElementById('business-map'), mapOptionFunc);

        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.businesses);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.businesses);
    }

    render() {
        return (
            <div id="business-map" ref={map => this.mapNode = map}> 
                Map
            </div>
        )
    }
}

export default BusinessMap;