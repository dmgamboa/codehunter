import express from "express";
import getLocations from "../models/locations.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
    const data = await getLocations();
    res.send(data);
});

export default router;
