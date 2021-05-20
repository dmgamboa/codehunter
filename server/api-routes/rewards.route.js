import express from "express";
import { massWriteRewards, getRewards } from "../models/rewards.js";

const router = express.Router();

// Mass add documents to rewards collection
const rewardsData = [
    // to add image/company logo (using placehold for now)
    {
        name: "Your business here",
        description: "Give something back to the community",
        cost: 500,
        availability: ["online", "in-store", "limited time"],
        category: ["food", "activities", "accessories", "tech"],
    },
    {
        name: "Kentucky Fried Beef",
        description: "All you can eat burger for 12 hours",
        cost: 1000,
        availability: ["online", "in-store", "limited time"],
        category: ["food"],
    },
    {
        name: "Novelty Foods",
        description: "Get a bag of oranges",
        cost: 1500,
        availability: ["online", "in-store", "limited time"],
        category: ["food"],
    },
    {
        name: "Foodanic",
        description: "50% off your bill",
        cost: 2000,
        availability: ["online", "in-store", "limited time"],
        category: ["food"],
    },
    {
        name: "VeganEaten",
        description: "All you can eat cookies",
        cost: 2500,
        availability: ["online", "in-store", "limited time"],
        category: ["food"],
    },
    {
        name: "VeriBurry",
        description: "Free peanut, butter, and jelly smoothies",
        cost: 3000,
        availability: ["online", "in-store", "limited time"],
        category: ["food"],
    },
    {
        name: "SporkPork",
        description: "One futures contract of lean hogs valud at current market price",
        cost: 10000,
        availability: ["online", "in-store", "limited time"],
        category: ["food"],
    },
    {
        name: "Meat with Wheat",
        description: "Free 5 lbs of pork belly and rice",
        cost: 5000,
        availability: ["online", "in-store", "limited time"],
        category: ["food"],
    },
    {
        name: "BCIT CST",
        description: "Actual cost: blood, sweat, and sleep. Benefit: you're looking at it.",
        cost: 9000,
        availability: ["online", "in-store", "limited time"],
        category: ["tech"],
    },
    {
        name: "Theory Suite",
        description: "Get an apple watch.",
        cost: 9000,
        availability: ["online", "in-store", "limited time"],
        category: ["tech"],
    },
    {
        name: "Surf Shark",
        description: "VPN hosting for a year.",
        cost: 9000,
        availability: ["online", "in-store", "limited time"],
        category: ["tech"],
    },
    {
        name: "Basic Logic",
        description: "$100 Amazon gift card.",
        cost: 9000,
        availability: ["online", "in-store", "limited time"],
        category: ["tech"],
    },
    {
        name: "The multiverse",
        description: "Meet and greet with spider man",
        cost: 5000,
        availability: ["online", "in-store", "limited time"],
        category: ["Activities"],
    },
    {
        name: "Squamish white water rafting",
        description: "Bring you and your friend for a 5 hours white water rafting trip in Whistler",
        cost: 10000,
        availability: ["online", "in-store", "limited time"],
        category: ["Activities"],
    },
    {
        name: "Bungee Jumping",
        description: "Bring you and your friend to jump from one of the tallest mountains in BC",
        cost: 7000,
        availability: ["online", "in-store", "limited time"],
        category: ["Activities"],
    },
    {
        name: "Skydiving with Tim",
        description: "Bring you and your friend to skydive into Joffre Lake",
        cost: 15000,
        availability: ["online", "in-store", "limited time"],
        category: ["Activities"],
    },
    {
        name: "Heli-Skiing",
        description: "Bring you and your friend for a Whistler heli skiing trip",
        cost: 15000,
        availability: ["online", "in-store", "limited time"],
        category: ["Activities"],
    },
    {
        name: "Herschel",
        description: "Free herschel bag of your choice",
        cost: 7000,
        availability: ["online", "in-store", "limited time"],
        category: ["accessories"],
    },
    {
        name: "Lulelemon",
        description: "Get some atheletic wear for this summer, 50% off a select item",
        cost: 5000,
        availability: ["online", "in-store", "limited time"],
        category: ["accessories"],
    },
    {
        name: "Pata",
        description: "Get 50% off select items",
        cost: 7000,
        availability: ["online", "in-store", "limited time"],
        category: ["accessories"],
    },
    {
        name: "Toodle Dee",
        description: "Get 20% off select items",
        cost: 7000,
        availability: ["online", "in-store", "limited time"],
        category: ["accessories"],
    },

];

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
        const results = await getRewards(category);
        res.send(results);
    } catch(err) {
        console.log(err)
    }
});

export default router;
