import express from "express";
import { readPlace } from "../models/places.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
    const data = await readPlace(req).catch((err) => {
        res.sendStatus(err);
    });
    res.send(data);
});

export default router;
