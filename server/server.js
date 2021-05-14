// Our application entry point
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config/index.js";
import getMapData from "./api-routes/getMapData.route.js";
import registration from "./api-routes/registration.route.js";
import getPlaceData from "./api-routes/getPlaceData.route.js";
import getLocationsList from "./api-routes/getLocationsList.route.js";

const app = express();
const port = config.port;
const uri = config.databaseURL;

// Connect with mongoose.
mongoose.connect(uri, {
    // only 50 ppl can connect at one time
    poolSize: 50,
    // after 2500 ms request will timeout
    // Warning: Top-level use of w, wtimeout, j, and fsync is deprecated. Use writeConcern instead.
    //wtimeout: 2500,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(cors());
app.use("/registration", registration);
app.use("/getMapData", getMapData);
app.use("/getPlaceData", getPlaceData);
app.use("/getLocationsList", getLocationsList);

app.listen(port, () => {
    //console.log(`App listening to port ${port}`);
});
