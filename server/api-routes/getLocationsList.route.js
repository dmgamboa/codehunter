import express from "express";
import { getLocationsList } from "../models/locations.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
    const locationsList = await getLocationsList(req);
    res.send(locationsList);
});

export default router;
