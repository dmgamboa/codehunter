import mongoose  from "mongoose";
// const locations = require("../models/locationsSchema.js");
import locations from "../models/schema.js";

function getLocations() {
    console.log("in getLocations");
    
    console.log("locations schema ", locations.findOne());
    
    return new Promise((res, rej) => {
        
        locations.findOne().exec(function(err, users) {
            console.log('users ', users);
            // If no errors are found, it responds with a JSON of all users
            return res(users);
        });
        // resolve("success");
    });
}

export default getLocations;