export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(businesses) { //???
        const tempBusinessObj = {};

        businesses.forEach(business => tempBusinessObj[business.id] = business);

        business
        .filter(business => !this.markers[business.id])
        .forEach(business => this.createMarkerFromBusiness(newBusiness, this.handleClick))

        Object.keys(this.markers)
        .filter(businessId => !tempBusinessObj[businessId])
        .forEach((businessId) => this.removeMarker(this.markers[businessId]))
    }

    createMarkerFromBusiness(business) {
        const position = new google.maps.LatLng(business.lat, business.lng);
        const marker = new google.maps.Marker({
            position, 
            map: this.map,
            title: business.name
        });

        this.markers[marker.businessId] = marker;

    }

    removeMarker(marker) {
        delete this.markers[marker.businessId];
        this.markers[marker.businessId].setMap(null);
    }
}