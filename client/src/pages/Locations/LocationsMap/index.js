import React from "react"
import GoogleMapReact from "google-map-react"
import SearchBar from "../../../components/SearchBar"
import Marker from "../../../components/Marker"
import { getMapData } from "../axios"

const vancouverCoords = {
  lat: 49.246292,
  lng: -123.116226
}

const initialZoom = 13

const handleGetMapData = () => {
  getMapData()
}

const LocationsMap = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SearchBar />
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAeyRbNMuUdpdvj8bd5CTx90-vOrVl2flM" }}
        center={ vancouverCoords }
        zoom={initialZoom}
      >
        <button onClick={handleGetMapData}>click it</button>
        <Marker
          id={50}
          lat={49.24}
          lng={-123.11}
          show={true}
        />
      </GoogleMapReact>
    </div>
  )
}

export default LocationsMap