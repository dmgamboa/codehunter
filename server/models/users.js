import { User } from "./schema.js";

const addUser = (req) => {
    return new Promise((res, rej) => {
        // Construct document using schema
        const newUser = new User(req.body);
        // Add newUser to user collection
        newUser.save((err) => {
            if (err) {
                return rej(err);
            }
            return res("Success!");
        });
    });
};

const addLocationAndPoints = (location) => {
    return new Promise((res, rej) => {
        if (location == null) {
            return rej("Invalid location");
        }
        const points = location.points;
        
    });
    

}

export { addUser, addLocationAndPoints };