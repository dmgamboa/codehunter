import express from "express";
import { massWriteRewards } from "../models/rewards.js";

const router = express.Router();

// Mass add documents to rewards collection
const rewardsData = [
    // to add image/company logo (using placehold for now)
    {
        name: "Your business here",
        desciption: "Give something back to the community",
        cost: 500,
        availability: ["online", "in-store", "limited time"],
        type: ["food", "activities", "accessories", "tech"],
    },
    {
        name: "Kentucky Fried Beef",
        desciption: "All you can eat burger for 12 hours",
        cost: 1000,
        availability: ["online", "in-store", "limited time"],
        type: ["food"],
    },
    {
        name: "Novelty Foods",
        desciption: "Get a bag of oranges",
        cost: 1500,
        availability: ["online", "in-store", "limited time"],
        type: ["food"],
    },
    {
        name: "Foodanic",
        desciption: "50% off your bill",
        cost: 2000,
        availability: ["online", "in-store", "limited time"],
        type: ["food"],
    },
    {
        name: "VeganEaten",
        desciption: "All you can eat cookies",
        cost: 2500,
        availability: ["online", "in-store", "limited time"],
        type: ["food"],
    },
    {
        name: "VeriBurry",
        desciption: "Free peanut, butter, and jelly smoothies",
        cost: 3000,
        availability: ["online", "in-store", "limited time"],
        type: ["food"],
    },
    {
        name: "SporkPork",
        desciption: "One futures contract of lean hogs valud at current market price",
        cost: 10000,
        availability: ["online", "in-store", "limited time"],
        type: ["food"],
    },
    {
        name: "Meat with Wheat",
        desciption: "Free 5 lbs of pork belly and rice",
        cost: 5000,
        availability: ["online", "in-store", "limited time"],
        type: ["food"],
    },
    {
        name: "BCIT CST",
        desciption: "Actual cost: blood, sweat, and sleep. Benefit: you're looking at it.",
        cost: 9000,
        availability: ["online", "in-store", "limited time"],
        type: ["tech"],
    },
    {
        name: "Theory Suite",
        desciption: "Get an apple watch.",
        cost: 9000,
        availability: ["online", "in-store", "limited time"],
        type: ["tech"],
    },
    {
        name: "Surf Shark",
        desciption: "VPN hosting for a year.",
        cost: 9000,
        availability: ["online", "in-store", "limited time"],
        type: ["tech"],
    },
    {
        name: "Basic Logic",
        desciption: "$100 Amazon gift card.",
        cost: 9000,
        availability: ["online", "in-store", "limited time"],
        type: ["tech"],
    },
    {
        name: "The multiverse",
        desciption: "Meet and greet with spider man",
        cost: 5000,
        availability: ["online", "in-store", "limited time"],
        type: ["Activities"],
    },
    {
        name: "Squamish white water rafting",
        desciption: "Bring you and your friend for a 5 hours white water rafting trip in Whistler",
        cost: 10000,
        availability: ["online", "in-store", "limited time"],
        type: ["Activities"],
    },
    {
        name: "Bungee Jumping",
        desciption: "Bring you and your friend to jump from one of the tallest mountains in BC",
        cost: 7000,
        availability: ["online", "in-store", "limited time"],
        type: ["Activities"],
    },
    {
        name: "Skydiving with Tim",
        desciption: "Bring you and your friend to skydive into Joffre Lake",
        cost: 15000,
        availability: ["online", "in-store", "limited time"],
        type: ["Activities"],
    },
    {
        name: "Heli-Skiing",
        desciption: "Bring you and your friend for a Whistler heli skiing trip",
        cost: 15000,
        availability: ["online", "in-store", "limited time"],
        type: ["Activities"],
    },
    {
        name: "Herschel",
        desciption: "Free herschel bag of your choice",
        cost: 7000,
        availability: ["online", "in-store", "limited time"],
        type: ["accessories"],
    },
    {
        name: "Lulelemon",
        desciption: "Get some atheletic wear for this summer, 50% off a select item",
        cost: 5000,
        availability: ["online", "in-store", "limited time"],
        type: ["accessories"],
    },
    {
        name: "Pata",
        desciption: "Get 50% off select items",
        cost: 7000,
        availability: ["online", "in-store", "limited time"],
        type: ["accessories"],
    },
    {
        name: "Toodle Dee",
        desciption: "Get 20% off select items",
        cost: 7000,
        availability: ["online", "in-store", "limited time"],
        type: ["accessories"],
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
        console.log(req);

    } catch(err) {
        console.err(rr)
    }
});

export default router;
