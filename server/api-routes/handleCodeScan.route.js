import express from "express";
import { readLocation } from "../models/locations.js";
import { readUser, updateUser } from "../models/users.js"
import { updateHistory } from "../models/history.js";

const router = express.Router();

router.post("/", async (req, res) => {
    let response;
    
    // Validate code by finding and returning the location. If it doesn't exist, it will return null.
    try {
        const location = await readLocation(req);

        if (location == null) {
            res.send("Invalid location");
        }

        const historyReq = {
            userToken: req.body.userToken,
            location,
            date: req.body.date,
        };

        const updateSuccessful = await updateHistory(historyReq);

        if (updateSuccessful) {
            const userReq = {
                body: {
                    userToken: req.body.userToken,
                    fields: "{}",
                },
                location,
            };
            
            await updateUser(userReq);

            response = {
                points: location.points,
            };

        } else {
            response = "Location redeemed"
        }
    } catch (error) {
        response = "Error: " + error;
    }
    
    res.send(response);
});

export default router;
