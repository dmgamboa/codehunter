import express from "express";
import { readHistory } from "../models/history.js";
import { readUser } from "../models/users.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
    if (req.query._id) {
        const userID = await readUser(req);
        req.query["userToken"] = JSON.stringify(userID);
    }
    const history = await readHistory(req);
    return res.send(history);
});

export default router;
