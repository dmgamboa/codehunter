import GoogleMapReact from "google-map-react";

import Marker from "../../../components/Marker";
import WindowSize from "../../../context/themes/WindowSize";

import { StyledMap } from "./styled";
import { initialCoords, mapViewSettings, mapsKey } from "./constant";


const LocationsMap = ({
    locations,
    handleDetails,
    coords
}) => {
    const window = WindowSize();
    const { initialZoom } = mapViewSettings;

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
        <StyledMap style={{ height: window.height }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: mapsKey }}
                center={coords ?? initialCoords}
                zoom={initialZoom}
            >
                {locations && renderMarkers(locations)}
            </GoogleMapReact>
        </StyledMap>
    );
};

export default LocationsMap;
