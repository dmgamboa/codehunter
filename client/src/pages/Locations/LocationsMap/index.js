import GoogleMapReact from "google-map-react";

import Marker from "../../../components/Marker";

import { StyledMap } from "./styled";
import { initialCoords, mapViewSettings, mapsKey } from "./constant";

const LocationsMap = ({ locations, handleDetails, userCoords }) => {
    const { bound, initialZoom } = mapViewSettings;

    const handleMarkerClick = () => {};

    const withinBounds = (coordinates) => {
        return (
            initialCoords.lng > coordinates[0] - bound &&
            initialCoords.lng < coordinates[0] + bound &&
            initialCoords.lat > coordinates[1] - bound &&
            initialCoords.lat < coordinates[1] + bound
        );
    };

    const renderMarkers = (markerData) => {
        return markerData.map((code) => {
            const { _id } = code;
            const { cultural_space_name, website } = code.fields;
            const { coordinates } = code.fields.geom;

            var searchQuery = cultural_space_name + "+" + website;

            if (withinBounds(coordinates)) {
                return (
                    <Marker
                        key={_id}
                        lat={coordinates[1]}
                        lng={coordinates[0]}
                        handleClick={handleMarkerClick}
                        data={searchQuery}
                    />
                );
            }
        });
    };

    return (
        <StyledMap>
            <GoogleMapReact
                bootstrapURLKeys={{ key: mapsKey }}
                center={initialCoords}
                zoom={initialZoom}
            >
                {locations && renderMarkers(locations)}
            </GoogleMapReact>
        </StyledMap>
    );
};

export default LocationsMap;
