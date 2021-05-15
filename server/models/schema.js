import mongoose from "mongoose";
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    points: Number
    /*datasetid: String,
    recordid: String,
    fields: {
        website: String,
        active_space: String,
        year: String,
        cultural_space_name: String,
        geom: {
            type: String,
            coordinates: [Number]
        },
        local_area: String,
        ownership: String,
        address: String,
        type: String,
        primary_use: String
    },
    record_timestamp: String*/
});

const userSchema = new Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    uid: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        data: {
            type: Buffer,
            required: true
        },
        imageType: {
            type: String,
            required: true
        }
    },
    points: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    redeemed: [{
        type: Schema.Types.ObjectId,
        ref: "Location"
     }]
});

// User -> users
const Location = mongoose.model("locations", locationSchema);
const User = mongoose.model("users", userSchema);

export { Location, User };