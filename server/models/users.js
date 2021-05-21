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

const addLocationAndPoints = (req, location) => {
    return new Promise(async (res, rej) => {
        if (location == null) {
            return rej("Invalid location");
        }
        const user = await getUser(req.body.user);

        const hasRedeemed = user.redeemed.some((instance) => {
            return instance.equals(location.id);
        });

        if (hasRedeemed) {
            //TODO: UNCOMMENT FOR PRODUCTION
            //return rej("Location already redeemed");
        }

        user.redeemed.push(location.id);

        const points = location.points;

        user.points += points;

        await user.save();

        return res(user.points);
    });
};

const updateUser = (req) => {
    return new Promise(async (res, rej) => {
        const firebaseUser = JSON.parse(req.body.user);

        if (!firebaseUser) {
            return rej("User not logged in");
        }
        // Get the Firebase user ID from the token.
        const userID = firebaseUser.uid;
        const fields = JSON.parse(req.body.fields);

        User.findOneAndUpdate({ uid: userID }, { $set: fields }, async (err, user) => {
            if (err) {
                return rej(err);
            }

            if (req.file) {
                user.avatar = req.file.location;
            }

            await user.save();

            return res(user);
        });
    });
};

export { createUser, readUser, addLocationAndPoints, updateUser };
