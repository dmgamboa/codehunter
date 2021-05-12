import mongoose from "mongoose";
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    datasetid: String,
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
    record_timestamp: String
});

const userSchema = new Schema({
    name: {
        first: String,
        last: String
    },
    username: String,
    email: String,
    uid: String
});

// User -> users
const User = mongoose.model("users", userSchema);
const Location = mongoose.model("locations", locationSchema);

export default User;