import express from "express";
import getMapData from "../models/getMapData.js";

const router = express.Router();

router.route("/").get(getMapData);

export default router;