import express from "express";
import { massWriteRewards, getRewards } from "../models/rewards.js";

const router = express.Router();

// return <LaptopOutlined />;
// } else if (tag === "In-Store") {
//     return <ShopOutlined />;
// } else if (tag === "Limited Time") {
//     return <FieldTimeOutlinedd />;



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
        const pageNumber = req.query.pageNum;
        console.log("categories: ", category);
        const results = await getRewards(category, pageNumber);
        res.send(results);
    } catch(err) {
        console.log(err)
    }
});

export default router;
