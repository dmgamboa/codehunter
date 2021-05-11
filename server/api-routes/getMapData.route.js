import express from "express";
import MapCtrl from "../controller/mapData.js";

const router = express.Router();

router.route("/").get(MapCtrl.getMapData);

export default router;