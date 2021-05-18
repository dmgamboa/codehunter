import isEmpty from "lodash/isEmpty.js";

import { Location } from "./schema.js";

const getLocations = () => {
    return new Promise((res, rej) => {
        Location.find({}).exec((err, data) => {
            if (err) {
                return rej(err);
            }
            return res(data);
        });
    });
};

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

const getLocationsList = (req) => {
    return new Promise((res, rej) => {
        const userCoords = req.query.userCoords;
        const page = parseInt(req.query.page);
        const limit = req.query.limit ? parseInt(req.query.limit) : 10;
        const skip = (page - 1) * limit;
        const filterReq = req.query.filters && JSON.parse(req.query.filters);

        let filters = {};
        if (filterReq) {
            for (const filter in filterReq) {
                if (filterReq[filter]) {
                    filters[`fields.${filter}`] = filterReq[filter];
                }
            }
        }

        Location.find(filters, {}, { skip, limit }).exec((err, data) => {
            if (err) {
                return rej(err);
            }

            var jsonData = JSON.stringify(data);
            jsonData = JSON.parse(jsonData);

            if (isEmpty(jsonData) || !userCoords) {
                return res(jsonData);
            }

            for (let i = 0; i < limit; i++) {
                const locationCoords = {
                    lng: jsonData[i].fields.geom.coordinates[0],
                    lat: jsonData[i].fields.geom.coordinates[1],
                }
                
                const distanceInKm = calculateDistance(userCoords, locationCoords);
                jsonData[i]["distanceInKm"] = distanceInKm;
            }

            return res(jsonData);
        });
    });
};

const getLocation = (req) => {
    return new Promise((res, rej) => {
        const locationID = req.body.locationID;
        Location.findOne({ _id: locationID }).exec((err, data) => {
            if (err) {
                return rej(err);
            }
            return res(data);
        });
    });
};

export { getLocations, getLocationsList, getLocation };
