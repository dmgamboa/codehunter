import express from "express";
import { readLocation } from "../models/locations.js";
import { addLocationAndPoints } from "../models/users.js"

const router = express.Router();

router.post("/", async (req, res) => {
    // Validate code by finding and returning the location. If it doesn't exist, it will return null.
    var response;
    
    try {
        const location = await readLocation(req);
        var newPoints = await addLocationAndPoints(req, location);
        newPoints = JSON.stringify(newPoints);
        res.send(newPoints);
    } catch (error) {
        response = "Error: " + error;
    }

    res.send(response);
});

export default router;
