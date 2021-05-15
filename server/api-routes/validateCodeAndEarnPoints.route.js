import express from "express";
import { getLocation } from "../models/locations.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const locationID = req.body.locationID;
    const location = await getLocation(locationID);
    
    if (location == null) {
        return;
    }

    const points = location.points;

    console.log(points);

    // TODO: Have points, now check if location is in user's collection, then if not, add points.

    const response = "success";
    res.send(response);
});

export default router;
