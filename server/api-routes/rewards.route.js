import express from "express";
import { massWriteRewards, getAllRewards, getRewards, getCodeForReward, setUserPoints, addReward } from "../models/rewards.js";

const router = express.Router();

router.route("/add-all-reward")
    .post(async (req, res) => {
        try {
            const result = await massWriteRewards(rewardsData);
            res.send("Successfully written data to rewards collection");
        } catch (err) {
            res.send(err);
        };
    })
    .get(async (req, res) => {
        const allDocsRewards = await getAllRewards();
        res.send(allDocsRewards);
    });


router.get("/getRewards", async (req, res) => {
    try {
        const category = req.query.category;
        const availability = req.query.availability;
        const pageNumber = req.query.pageNum;
        const results = await getRewards(category, availability, pageNumber);

        res.send(results);
    } catch(err) {
        res.send(err)
    };
});

router.get("/getCodeForReward", async (req, res) => {
    try {
        const params = req.query;
        const code = await getCodeForReward(params);
        res.send(code);
    } catch (err) {
        res.send(err);
    };
});

router.post("/setUserPoints", async (req, res) => {
    try {
        const userId = req.body._id;
        const rewardCost = req.body.rewardCost;
        const updatedUserData = await setUserPoints(userId, rewardCost);

        res.send(updatedUserData);
    } catch (err) {
        res.send(err);
    };
});

router.post("/addReward", async (req, res) => {
    try {
        const userId = req.body._id;
        const rewardId = req.body.rewardId;
        const updatedUserData = await addReward(userId, rewardId);

        res.send(updatedUserData);
    } catch (err) {
        res.send(err);
    };
});

export default router;
