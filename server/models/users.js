import { User } from "./schema.js";

const createUser = (req) => {
    return new Promise((res, rej) => {
        const user = JSON.parse(req.body.userToken);

        if (!user) {
            return rej("User token unavailable");
        }

        const userID = user.uid;

        // Construct document using schema
        const newUser = new User(req.body.userInfo);
        // Add newUser to user collection

        newUser.uid = userID;

        newUser.save((err) => {
            if (err) {
                return rej(err);
            }
        });

        const fields = {
            name: newUser.name,
            points: newUser.points,
        };

        return res(fields);
    });
};

const readUser = (req) => {
    return new Promise((res, rej) => {
        const user = JSON.parse(req.query.userToken);
        const fields = req.query.fields;

        if (!user) {
            return rej("User not logged in");
        }

        const userID = user.uid;

        User.findOne({ uid: userID }, fields).exec((err, data) => {
            if (err) {
                return rej(err);
            }
            return res(data);
        });
    });
};

const readUsers = (req) => {
    return new Promise((res, rej) => {
        const filters = req.query.filters;
        const fields = req.query.fields;

        User.find(filters, fields).exec((err, data) => {
            if (err) {
                return rej(err);
            }
            return res(data);
        });
    });
};

const updateUser = (req) => {
    return new Promise(async (res, rej) => {
        console.log(req.body);
        const user = JSON.parse(req.body.userToken);

        if (!user) {
            return rej("User not logged in");
        }

        const userID = user.uid;
        const fields = JSON.parse(req.body.fields); 

        User.findOneAndUpdate({ uid: userID }, { $set: fields }, async (err, user) => {
            if (err) {
                return rej(err);
            }

            // Check if this is a scan handler by checking if the location was sent with the request.
            if (req.location) {
                user.points += req.location.points;
            }
            
            // Check if the update includes a file, the avatar.
            if (req.file) {
                user.avatar = req.file.location;
            }

            // Check if a user is to be added to this user's "friends" array.
            if (req.body.friendID) {
                const hasFriend = user.friends.some((instance) => {
                    return (instance).equals(req.body.friendID);
                });
        
                if (hasFriend) {
                    user.friends.pull(req.body.friendID);
                    if (req.body.removeFriend) {
                        User.findOneAndUpdate({ _id: req.body.friendID }, {}, async (err, friend) => {
                            friend.friends.pull(user._id);
                            await friend.save();
                        });
                    }
                } else {
                    user.friends.push(req.body.friendID);
                }
            }

            await user.save();

            return res(user);
        });
    });
};

export { createUser, readUser, readUsers, updateUser };
