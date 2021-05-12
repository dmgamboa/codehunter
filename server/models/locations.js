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

export default getLocations;