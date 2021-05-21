import express from "express";
import upload from "../config/upload.js";
import { updateUser } from "../models/users.js";

const router = express.Router();

router.post("/", upload.single("avatar"), async (req, res) => {
    const response = await updateUser(req);

    return res.send(response);
});

export default router;
