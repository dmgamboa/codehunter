import express from "express";
import { createUser } from "../models/users.js";
import { createHistory } from "../models/history.js";

const router = express.Router();

router.post("/", async (req, res) => {
    var response = await createUser(req);
    response = JSON.stringify(response);

    await createHistory(req);

    console.log("response (router): " + response);
    res.send(response);
});

export default router;
