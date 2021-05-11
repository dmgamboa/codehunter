// Our application entry point
import express from "express";
import cors from "cors";

import registration from "./api-routes/registration.route.js";
import getMapData from "./api-routes/getMapData.route.js";
import config from "./config/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/registration", registration);
app.use("/getMapData", getMapData);

export default app;