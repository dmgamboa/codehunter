import express from "express";
import { readUser, readUsers } from "../models/users.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
    req.query.filters = JSON.parse(req.query.filters);

    const user = await readUser(req);

    switch (req.query.tab) {
        case "friends":
            req.query.filters["_id"] = { $in: user.friends };
            req.query.filters["friends"] = user._id;
            break;
        case "pending":
            break;
        case "incoming":
            req.query.filters["_id"] = { $nin: user.friends };
            req.query.filters["friends"] = user._id;
            break;
        default:
            req.query.filters["_id"] = {
                $nin: user.friends,
            };
    }

    console.log(req.query.filters);

    const users = await readUsers(req);
    return res.send(users);
});

export default router;
