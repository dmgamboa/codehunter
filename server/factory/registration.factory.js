import mongoose from "mongoose";
import User from "../models/schema.js";

function addUser(req) {
    // Accessing db and adding user doc to user collection
    console.log("in addUser");
    console.log("request body", req.body);
    return new Promise((res, rej) => {
        var newUser = new User(req.body);
        newUser.save((err) => {
            if (err) console.log("error", err);
        });
        return res(req.body);
    });
}

export default addUser;