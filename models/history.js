import { History } from "./schema.js";

const createHistory = (req) => {
    return new Promise((res, rej) => {
        const user = JSON.parse(req.body.userToken);

        if (!user) {
            return rej("User token unavailable");
        }

        const userID = user.uid;

        const newHistory = new History({ uid: userID });
        
        // Add newHistory to history collection
        newHistory.save((err) => {
            if (err) {
                return rej(err);
            }
        });

        return res("History creation successful");
    });
};

const readHistory = (req) => {
    return new Promise((res, rej) => {
        const user = JSON.parse(req.query.userToken);
        const fields = req.query.userFields;

        if (!user) {
            return rej("User not logged in");
        }

        const userID = user.uid;

        History.findOne({ uid: userID }, fields).exec((err, data) => {
            if (err) {
                return rej(err);
            }
            
            if (req.query.locationID) {
                let response = []
                for (let i = 0; i < data.history.length; i++) {
                    response.push(data.history[i].locationID);
                }
                
                return res(response);
            }

            return res(data);
        });
    });
};

const updateHistory = (req) => {
    return new Promise(async (res, rej) => {
        const user = JSON.parse(req.userToken);
        const userID = user.uid;
        const location = JSON.parse(JSON.stringify(req.location));
        const date = req.date;
        
        History.findOneAndUpdate({ uid: userID }, {}, async (err, history) => {
            if (err) {
                return rej(err);
            }

            const hasRedeemed = history.history.some((instance) => {
                return (instance.locationID).equals(location._id);
            });
    
            if (hasRedeemed) {
                return rej(false);
            }
            
            const instance = {
                locationID: location._id,
                location: location.fields.cultural_space_name,
                date: date,
                points: location.points,
            };

            history.history.push(instance);

            history.save();

            return res(true)
        });
    });
};

export { createHistory, readHistory, updateHistory };
