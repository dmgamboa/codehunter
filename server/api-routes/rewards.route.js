import express from "express";
import { massWriteRewards, getRewards, getCodeForReward } from "../models/rewards.js";

const router = express.Router();

// ${url}rewards/add-all-rewards
router.post("/add-all-rewards", async (req, res) => {
    try {
        const result = await massWriteRewards(rewardsData);

        res.send("Successfully written data to rewards collection");
    } catch (err) {
        res.send(err);
    }

});

router.get("/getRewards", async (req, res) => {
    try {
        const category = req.query.category;
        const availability = req.query.availability;
        const pageNumber = req.query.pageNum;
        const results = await getRewards(category, availability, pageNumber);

        res.send(results);
    } catch(err) {
        console.log(err)
    }
});

router.get("/getCodeForReward", async (req, res) => {
    try {
        const params = req.query;
        const code = await getCodeForReward(params);
        res.send(code);
    } catch (err) {
        console.log(err);
    }
});

export default router;
