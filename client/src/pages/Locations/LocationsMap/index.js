import GoogleMapReact from "google-map-react";

import Marker from "../../../components/Marker";

import { StyledMap } from "./styled";
import { initialCoords, mapViewSettings, mapsKey } from "./constant";


const LocationsMap = ({
    locations,
    handleDetails,
    userCoords,
}) => {
    const { bound, initialZoom } = mapViewSettings;

    const handleMarkerClick = () => {

    };

    // const withinBounds = (coordinates) => {
    //     return (
    //         initialCoords.lng > coordinates[0] - bound &&
    //         initialCoords.lng < coordinates[0] + bound &&
    //         initialCoords.lat > coordinates[1] - bound &&
    //         initialCoords.lat < coordinates[1] + bound
    //     );
    // };

    const renderMarkers = (locations) => {
        return locations.map(({
            name,
            website,
            coordinates
        }) => {

            return (
                <Marker
                    key={name}
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                    handleClick={handleMarkerClick}
                    data={`${name}+${website}`}
                />
            );
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
