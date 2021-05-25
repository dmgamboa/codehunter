import express from "express";
import { readLocations } from "../models/locations.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
    req.query.filters = JSON.parse(req.query.filters);

    if (req.query.userToken) {
        const userToken = req.query.userToken;
        const userFields = req.query.userFields;
        const params = {
            userToken,
            fields: userFields,
        };

        const array = await readUser(params);

        req.query.filters["_id"] = { $in: array };
    }

    const locations = await readLocations(req);
    res.send(locations);
});

export default router;
