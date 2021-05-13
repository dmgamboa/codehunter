/* eslint-disable */
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

import SearchBar from "../../../components/SearchBar";
import Marker from "../../../components/Marker";

import { StyledMap } from "./styled";
import { getMapData, getPlaceData, getLocationsList } from "../axios";

const initialCoords = {
    lng: -123.116226,
    lat: 49.246292,
};

const initialZoom = 13;

const LocationsMap = () => {
    const [markers, setMarkers] = useState([]);
    const [coords, setCoords] = useState(initialCoords);
    const mapsKey = process.env.REACT_APP_MAPS_KEY;

    const bound = 0.015;

    useEffect(async () => {
        // UNCOMMENT TO USE CURRENT POSITION
        //getCoords();
        const mapData = await getMapData();
        setMarkers(mapData.data);
    }, []);

    const getCoords = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                setCoords({
                    lng: pos.coords.longitude,
                    lat: pos.coords.latitude,
                });
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    const handleMarkerClick = async (markerClicked) => {
        /*console.log(markerClicked);
        const placeData = await getPlaceData(markerClicked);
        console.log(placeData.data);
        */
    };

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
            {
                //<SearchBar />
            }
            <GoogleMapReact
                bootstrapURLKeys={{ key: mapsKey }}
                center={initialCoords}
                zoom={initialZoom}
            >
                {renderMarkers(markers)}
            </GoogleMapReact>
        </StyledMap>
    );
};

export default LocationsMap;
