class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
        this.markerCounter = 1;
    }

    updateMarkers(businesses) { //???
        if (Object.keys(this.markers).size) {
            this.markers = {};
        }

        // businesses
        //     .filter(business => !this.markers[business.id])
        //     .forEach(business => this.createMarkerFromBusiness(newBusiness, this.handleClick))
        //     .then(this.markerCounter += 1)

        // const tempBusinessObj = {};

        // businesses.forEach(business => tempBusinessObj[business.id] = business);

        businesses.forEach(business => {
            if (!this.markers[business.id]) {
                this.createMarkerFromBusiness(business);
                this.markerCounter += 1;
            }
        });


        // const tempBusinessObj = {};

        // businesses.forEach(business => tempBusinessObj[business.id] = business);

        // business
        // .filter(business => !this.markers[business.id])
        // .forEach(business => this.createMarkerFromBusiness(newBusiness, this.handleClick))

        // Object.keys(this.markers)
        // .filter(businessId => !tempBusinessObj[businessId])
        // // .forEach((businessId) => this.removeMarker(this.markers[businessId]))
    }

    createMarkerFromBusiness(business) {
        const position = new google.maps.LatLng(business.lat, business.lng);
        const marker = new google.maps.Marker({
            position, 
            map: this.map,
            businessId: business.id,
            counter: {
                index: this.markerCounter.toString()
            }
        });

        this.markers[marker.businessId] = marker;

    }

    // removeMarker(marker) {
    //     this.markers[marker.businessId].setMap(null);
    //     delete this.markers[marker.businessId];
    // }
}

export default MarkerManager;