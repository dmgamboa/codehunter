import React from "react";
import { GoogleMap, withScriptjs } from "react-google-maps";

const LocationsMap = () => {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 12, lng: 12 }}
        />
    );
}

const MapContainer = () =>

export default LocationsMap;