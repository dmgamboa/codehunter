// Our application entry point
import express from "express";

import registration from "./api-routes/registration.route.js"
import getMapData from "./api-routes/getMapData.route.js";
import config from "./config/index.js"

const app = express();
const port = config.port;

app.use(express.json());
app.use("/registration", registration);
app.use("/getMapData", getMapData);

app.listen(port, () => {
  console.log(`App listening to port ${port}`)
});