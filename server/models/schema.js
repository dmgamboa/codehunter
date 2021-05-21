import mongoose from "mongoose";
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    points: Number,
});

const userSchema = new Schema({
    name: {
        first: {
            type: String,
            required: true,
        },
        last: {
            type: String,
            required: true,
        }
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    uid: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: String,
    points: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    redeemed: [{
        type: Schema.Types.ObjectId,
        ref: "Location",
    }],
    bookmarks: [{
        type: Schema.Types.ObjectId,
        ref: "Location",
    }],
});

const rewardSchema = new Schema({
    logo: {
        data: String,
        imageType: String,
    },
    name:  String,
    description: String,
    cost: Number,
    availability: [String], //online, in-store, limited time
    category: [String], //food, accessories, acitivites, tech
});

// User -> users
const Location = mongoose.model("locations", locationSchema);
const User = mongoose.model("users", userSchema);
const Reward = mongoose.model("reward", rewardSchema);

export { Location, User, Reward };
