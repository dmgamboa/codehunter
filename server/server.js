// Our application entry point
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config/index.js";
import createUser from "./api-routes/createUser.route.js";
import readLocations from "./api-routes/readLocations.route.js";
import readPlace from "./api-routes/readPlace.route.js";
import readUser from "./api-routes/readUser.route.js";
import updateUser from "./api-routes/updateUser.route.js";
import validateCode from "./api-routes/validateCode.route.js";

const app = express();
const port = config.port;
const uri = config.databaseURL;

// Connection to MongoDB.
mongoose.connect(uri, {
    poolSize: 50,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

app.use(express.json());
app.use(cors());
app.use("/createUser", createUser);
app.use("/readLocations", readLocations);
app.use("/readPlace", readPlace);
app.use("/readUser", readUser);
app.use("/updateUser", updateUser);
app.use("/validateCode", validateCode);

app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});
