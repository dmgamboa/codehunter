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

    // const withinBounds = (coordinates) => {
    //     return (
    //         initialCoords.lng > coordinates[0] - bound &&
    //         initialCoords.lng < coordinates[0] + bound &&
    //         initialCoords.lat > coordinates[1] - bound &&
    //         initialCoords.lat < coordinates[1] + bound
    //     );
    // };

    const renderMarkers = (locations) => {
        return locations.map(location => {
            const { coordinates, name } = location;

            return (
                <Marker
                    key={name}
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                    handleClick={() => handleDetails(location)}
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
