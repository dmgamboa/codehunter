import express from "express";
import { getUserPoints } from "../models/users.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
    var response = await getUserPoints(req);
    response = JSON.stringify(response);
    res.send(response);
});

export default router;
