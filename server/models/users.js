import { User } from "./schema.js";

const addUser = (req) => {
    return new Promise((res, rej) => {
        // Construct document using schema
        const newUser = new User(req.body);
        // Add newUser to user collection
        newUser.save((err) => {
            if (err) {
                return rej(err);
            }
            return res("Success!");
        });
    });
};

const getUser = (req) => {
    return new Promise((res, rej) => {
        // Get the Firebase user ID from the token.
        const userID = req.body.user.uid;
        
        User.findOne({ uid: userID }).exec((err, data) => {
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
        const user = await getUser(req);

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
    });
};

export { addUser, getUser, addLocationAndPoints };