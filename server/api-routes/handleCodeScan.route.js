import express from "express";
import { readLocation } from "../models/locations.js";
import { updateUser } from "../models/users.js"

const router = express.Router();

router.post("/", async (req, res) => {
    let response;
    
    // Validate code by finding and returning the location. If it doesn't exist, it will return null.
    try {
        const location = await readLocation(req);

        if (location == null) {
            res.send("Invalid location");
        }

        const userReq = {
            body: {
                userToken: req.body.userToken,
                fields: "{}",
            },
            location,
        };

        const user = await updateUser(userReq);

        const updatedData = {
            avatar: user.avatar,
            name: user.name,
            points: user.points,
        };

        response = updatedData;
    } catch (error) {
        response = "Error: " + error;
    }

    res.send(response);
});

export default router;
