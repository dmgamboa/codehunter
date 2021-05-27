import e from "express";
import express from "express";
import { readLocations } from "../models/locations.js";
import { readHistory } from "../models/history.js";

const router = express.Router();

router.route("/").get(async (req, res) => {

    req.query.filters = JSON.parse(req.query.filters);
    if (req.query.sort === "az") {
        req.query.sort = { "fields.cultural_space_name": 1 };
    } else if (req.query.sort === "za") {
        req.query.sort = { "fields.cultural_space_name": -1 };
    } else {
        const userCoords = JSON.parse(req.query.userCoords);
        delete req.query.sort;
        req.query.filters["geom"] = {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [userCoords.lng, userCoords.lat],
                    spherical: true,
                },
            },
        };
    }

    // Check if userFields was passed, if so, "visited" was ticked.
    if (req.query.userFields && !(req.query.userFields === "false")) {
        const userToken = req.query.userToken;
        const userFields = req.query.userFields;
        const params = {
            query: {
                userToken,
                fields: req.query.userFields,
                locationID: true,
            },
        };

        const userHistory = await readHistory(params);

        req.query["page"] = 1;
        req.query.filters["_id"] = { $in: userHistory };
    }

    const locations = await readLocations(req);

    res.send(locations);
});

export default router;
