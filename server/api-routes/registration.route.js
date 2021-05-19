import express from "express";
import { addUser } from "../models/users.js";

const router = express.Router();

router.post("/", async (req, res) => {
    var response = await addUser(req);
    response = JSON.stringify(response);

    console.log("response (router): " + response);
    res.send(response);
});

export default router;
