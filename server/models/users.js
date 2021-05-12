import { User } from "./schema.js";

const addUser = (req) => {
    return new Promise((res, rej) => {
        const newUser = new User(req.body);
        newUser.save((err) => {
            if (err) {
                return rej(err);
            }
            return res("Success!");
        });
    });
};

export default addUser;