import GoogleMapReact from "google-map-react";

import WindowSize from "../../../context/themes/WindowSize";
import { ReactComponent as Museum } from "../../../assets/icons/sculpture-bust.svg";
import { ReactComponent as Community } from "../../../assets/icons/group.svg";
import { ReactComponent as Studio } from "../../../assets/icons/paint.svg";
import { ReactComponent as Theatre } from "../../../assets/icons/theatre.svg";
import { ReactComponent as Cafe } from "../../../assets/icons/cutlery.svg";
import { ReactComponent as Educational } from "../../../assets/icons/graduation-cap.svg";

import { StyledMap } from "./styled";
import { initialCoords, mapViewSettings, mapsKey } from "./constant";
import Icon, { EnvironmentFilled } from "@ant-design/icons";

const LocationsMap = ({ locations, handleDetails, coords }) => {
    const window = WindowSize();
    const { initialZoom } = mapViewSettings;

    const getMarkerIcon = (type) => {
        switch (type) {
        case "Musem/Gallery":
            return <Icon component={Museum} />;
        case "Studio/Rehearsal":
            return <Icon component={Studio} />;
        case "Community Space":
            return <Icon component={Community} />;
        case "Theatre/Performance":
            return <Icon component={Theatre} />;
        case "Educational":
            return <Icon component={Educational} />;
        case "Cafe/Restaurant/Bar":
            return <Icon component={Cafe} />;
        default:
            return <EnvironmentFilled />;
        }
    };

    const renderMarkers = (locations) => {
        return locations.map((location) => {
            const { coordinates, name, type } = location;

            return (
                <div
                    key={name}
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                    onClick={() => handleDetails(location)}
                    className="marker"
                >
                    {getMarkerIcon(type)}
                </div>
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
