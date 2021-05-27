import express from "express";
import { massWriteRewards, getAllRewards, getRewards, getCodeForReward, setUserPoints, addReward } from "../models/rewards.js";

const router = express.Router();

// Used to mass write to rewards collection
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
    const category = req.query.category;
    const availability = req.query.availability;
    const pageNumber = req.query.pageNum;
    const results = await getRewards(category, availability, pageNumber);

    res.send(results);
});

router.get("/getCodeForReward", async (req, res) => {
    const params = req.query;
    const code = await getCodeForReward(params);
    res.send(code);
});

router.post("/setUserPoints", async (req, res) => {
    try {
        const userId = req.body._id;
        const rewardCost = req.body.rewardCost;
        const updatedUserData = await setUserPoints(userId, rewardCost);

        res.send(updatedUserData);
    } catch (err) {
        res.status(400).send("Id and/or cost invalid");
    };
});

router.post("/addReward", async (req, res) => {
    try {
        const userId = req.body._id;
        const rewardId = req.body.rewardId;
        const updatedUserData = await addReward(userId, rewardId);

        res.send(updatedUserData);
    } catch (err) {
        res.status(400).send("Id and/or reward id invalid");
    };
});

export default router;
