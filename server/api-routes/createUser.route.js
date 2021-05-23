import express from "express";
import { createUser } from "../models/users.js";

const router = express.Router();

router.post("/", async (req, res) => {
    var response = await createUser(req);
    response = JSON.stringify(response);
    res.send(response);
});

export default router;
