import isEmpty from "lodash/isEmpty.js";
import calculateDistance from "../utils/calculateDistance.js";
import { Location } from "./schema.js";

const readLocation = (req) => {
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

const readLocations = (req) => {
    return new Promise((res, rej) => {
        const userCoords = req.query.userCoords;
        const page = parseInt(req.query.page);
        const limit = (req.query.limit ? parseInt(req.query.limit) : 10);
        const skip = (page - 1) * limit;
        const filterReq = req.query.filters;
        const sort = req.query.sort;

        let filters = {};
        if (filterReq) {
            for (const filter in filterReq) {
                if (filterReq[filter]) {
                    if (filter === "_id" || filter === "$text") {
                        filters[filter] = filterReq[filter];
                    } else {
                        filters[`fields.${filter}`] = filterReq[filter];
                    }
                }
            }
        }

        Location.find(filters, {}, { skip, limit }).sort(sort).exec((err, data) => {
            if (err) {
                return rej(err);
            }

            var jsonData = JSON.stringify(data);
            jsonData = JSON.parse(jsonData);

            if (isEmpty(jsonData) || !userCoords) {
                return res(jsonData);
            }

            for (let i = 0; i < limit && i < jsonData.length; i++) {
                const locationCoords = {
                    lng: jsonData[i].fields?.geom?.coordinates[0],
                    lat: jsonData[i].fields?.geom?.coordinates[1],
                }
                
                const distanceInKm = locationCoords && calculateDistance(userCoords, locationCoords);
                jsonData[i]["distanceInKm"] = distanceInKm;
            }

            return res(jsonData);
        });
    });
};



export { readLocation, readLocations };
