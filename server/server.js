// Our application entry point
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import registration from "./api-routes/registration.route.js";
import getMapData from "./api-routes/getMapData.route.js";
import config from "./config/index.js";
import getLocations from "./factory/locations.factory.js";
import addUser from "./factory/registration.factory.js";

const app = express();

const uri = config.databaseURL;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

app.use("/registration", registration);



//app.use("/getMapData", getMapData);
/*app.get("/getMapData", async (req, res) => {
    // getLocations().then((data) => {

    //     console.log("getting data");
    //     console.log(data);
    // });


    const data = await getLocations();

    console.log("getting data");
    console.log(data);

});*/

export default app;