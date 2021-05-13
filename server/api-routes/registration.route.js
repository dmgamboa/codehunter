import express from "express";
import addUser from "../models/users.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const response = await addUser(req);
    res.send(response);
});
export default router;