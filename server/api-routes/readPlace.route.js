import express from "express";
import { readPlace } from "../models/places.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
    const data = await readPlace(req);
    res.send(data);
});

export default router;
