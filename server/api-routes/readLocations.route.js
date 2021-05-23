import express from "express";
import { readLocations } from "../models/locations.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
    const locations = await readLocations(req);
    res.send(locations);
});

export default router;
