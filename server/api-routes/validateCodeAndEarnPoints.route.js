import express from "express";
import { getLocation } from "../models/locations.js";
import { addLocationAndPoints } from "../models/users.js"

const router = express.Router();

router.post("/", async (req, res) => {
    // Validate code by finding and returning the location. If it doesn't exist, it will return null.
    const location = await getLocation(req);
    const response = await addLocationAndPoints(location);

    res.send(response);
});

export default router;
