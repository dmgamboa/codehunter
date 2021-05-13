import express from "express";
import getPlace from "../models/places.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
    const data = await getPlace(req);
    res.send(data);
});

export default router;
