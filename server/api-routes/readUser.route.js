import express from "express";
import { readUser } from "../models/users.js"

const router = express.Router();

router.route("/").get(async (req, res) => {
    const user = await readUser(req);
    return res.send(user);
});

export default router;