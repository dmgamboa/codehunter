const convertToRadians = (degrees) => {
    return degrees * Math.PI / 180;
}
  
const calculateDistance = (userCoords, locationCoords) => {
    userCoords = JSON.parse(userCoords);
    
    const earthRadiusInKm = 6371;

    const lngDistance = convertToRadians(locationCoords.lng - userCoords.lng);
    const latDistance = convertToRadians(locationCoords.lat - userCoords.lat);

    const length = Math.pow(Math.sin(latDistance / 2), 2)
    + Math.pow(Math.sin(lngDistance / 2), 2)
    * Math.cos(convertToRadians(userCoords.lat))
    * Math.cos(convertToRadians(locationCoords.lat));
    
    const angularDistance = 2 * Math.atan2(Math.sqrt(length), Math.sqrt(1 - length)); 
    return earthRadiusInKm * angularDistance;
}

export default calculateDistance;