// Our application entry point
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config/index.js";
import createUser from "./api-routes/createUser.route.js";
import handleCodeScan from "./api-routes/handleCodeScan.route.js";
import readHistory from "./api-routes/readHistory.route.js";
import readLocations from "./api-routes/readLocations.route.js";
import readPlace from "./api-routes/readPlace.route.js";
import readUser from "./api-routes/readUser.route.js";
import readUsers from "./api-routes/readUsers.route.js";
import updateUser from "./api-routes/updateUser.route.js";
import rewards from "./api-routes/rewards.route.js";

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
app.use("/handleCodeScan", handleCodeScan);
app.use("/readHistory", readHistory);
app.use("/readLocations", readLocations);
app.use("/readPlace", readPlace);
app.use("/readUser", readUser);
app.use("/readUsers", readUsers);
app.use("/updateUser", updateUser);

// Rewards page
app.use("/rewards", rewards);

app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});
