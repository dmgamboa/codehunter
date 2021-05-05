import React from "react";
import GoogleMapReact from "google-map-react";

const vancouverCoords = {
  lat: 49.246292,
  lng: -123.116226
};

const initialZoom = 13;

const LocationsMap = () => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAeyRbNMuUdpdvj8bd5CTx90-vOrVl2flM" }}
        center={{ lat: 49.246292, lng: -123.116226 }}
        zoom={initialZoom}
      />
    </div>
  );
};

export default LocationsMap;