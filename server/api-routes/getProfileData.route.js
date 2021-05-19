import express from "express";
import { getUser } from "../models/users.js"

const router = express.Router();

router.route("/").get(async (req, res) => {
    const profileData = await getUser(req.query.user);
    return res.send(profileData);
});

export default router;