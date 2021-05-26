import express from "express";
import { readHistory } from "../models/history.js"

const router = express.Router();

router.route("/").get(async (req, res) => {
    const history = await readHistory(req);
    return res.send(history);
});

export default router;
