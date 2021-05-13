import GoogleMapReact from "google-map-react";

import Marker from "../../../components/Marker";

import { StyledMap } from "./styled";
import {
    initialCoords,
    mapViewSettings,
    mapsKey
} from "./constant";


const LocationsMap = ({
    locations,
    handleDetails,
    userCoords
}) => {
    // const [coords, setCoords] = useState(initialCoords);

    // useEffect(async () => {
    //     // UNCOMMENT TO USE CURRENT POSITION
    //     //getCoords();
    //     const mapData = await getMapData();
    //     setMarkers(mapData.data);
    // }, []);

    // const getCoords = () => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition((pos) => {
    //             setCoords({
    //                 lat: pos.coords.latitude,
    //                 lng: pos.coords.longitude,
    //             });
    //         });
    //     } else {
    //         console.log("Geolocation is not supported by this browser.");
    //     }
    // };
    
    const { bound, initialZoom } = mapViewSettings;

    const handleMarkerClick = () => {

    }

    const withinBounds = (coordinates) => {
        return (
            coords.lng > coordinates[0] - bound &&
            coords.lng < coordinates[0] + bound &&
            coords.lat > coordinates[1] - bound &&
            coords.lat < coordinates[1] + bound
        );
    }

    const renderMarkers = (markerData) => {
        return markerData.map((code) => {
            const { _id } = code;
            const { cultural_space_name, website } = code.fields;
            const { coordinates } = code.fields.geom;

            var searchQuery = cultural_space_name + '+' + website;

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
