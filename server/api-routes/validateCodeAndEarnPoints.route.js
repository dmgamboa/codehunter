import express from "express";
import { getLocation } from "../models/locations.js";
import { addLocationAndPoints } from "../models/users.js"

const router = express.Router();

router.post("/", async (req, res) => {
    // Validate code by finding and returning the location. If it doesn't exist, it will return null.
    var response;
    
    try {
        const location = await getLocation(req);
        response = await addLocationAndPoints(req, location);
    } catch (error) {
        console.log("oop");
        response = "Error: " + error;
    }

    res.send(response);
});

export default router;
