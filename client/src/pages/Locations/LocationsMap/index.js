import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import SearchBar from "../../../components/SearchBar";
import Marker from "../../../components/Marker";
import { getMapData } from "../axios";

const initialCoords = {
  lat: 49.246292,
  lng: -123.116226
};

const initialZoom = 13;

const LocationsMap = () => {
  const [markers, setMarkers] = useState([]);
  const [coords, setCoords] = useState(initialCoords);

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
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const handleMarkerClick = (cultural_space_name) => {
    console.log("This place is: ", cultural_space_name);
  };

  const renderMarkers = (markerData) => {
    return markerData.map(code => {
      const { _id } = code;
      const { cultural_space_name, local_area } = code.fields;
      const { coordinates } = code.fields.geom;
      if (coords.lat > coordinates[1] - bound
        && coords.lat < coordinates[1] + bound
        && coords.lng > coordinates[0] - bound
        && coords.lng < coordinates[0] + bound) {
        return (
          <Marker
            key={_id}
            lat={coordinates[1]}
            lng={coordinates[0]}
            handleClick={handleMarkerClick}
            cultural_space_name={cultural_space_name}
            local_area={local_area}
          />
        );
      }
    });
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SearchBar />
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAeyRbNMuUdpdvj8bd5CTx90-vOrVl2flM" }}
        center={initialCoords}
        zoom={initialZoom}
      >
        {renderMarkers(markers)}
      </GoogleMapReact>
    </div>
  );
};

export default LocationsMap;