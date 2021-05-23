import GoogleMapReact from "google-map-react";

import Marker from "../../../components/Marker";

import { StyledMap } from "./styled";
import { initialCoords, mapViewSettings, mapsKey } from "./constant";


const LocationsMap = ({
    locations,
    handleDetails,
    coords
}) => {
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
        <StyledMap>
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
