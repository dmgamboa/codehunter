import { Reward, User } from "./schema.js";

// Used to write documents into rewards collection (see schema.js for details)
export const massWriteRewards = async (documents) => {
    return new Promise((res, rej) => {
        if (documents.length <= 0) {
            return rej("No documents passed into parameter");
        }
        Reward.collection.drop();
        Reward.insertMany(documents, { upsert: true })
            .then(() => {
                return res("data created in rewards collection");
            })
            .catch((err) => {
                return rej(err);
            });
    });
};

// To read Reward collection
export const getAllRewards = async () => {
    return new Promise(async (res, rej) => {
        const collection = await Reward.find({});
        return res(collection)
    });
};

// Get rewards from Rewards collection
export const getRewards = (category, avail, pageNumber, pageSize = 8) => {
    let fmtAvail;
    if (avail) {
        fmtAvail = avail.map((loc) => {
            return loc.toLowerCase();
        });
    }

    return new Promise(async (res, rej) => {
        const skips = pageSize * (pageNumber - 1);

        if (category === "all") {
            try {
                const results = await Reward.find({
                    availability: { $in: fmtAvail },
                })
                    .skip(skips)
                    .limit(pageSize);
                return res(results);
            } catch (err) {
                return rej(err);
            }
        };

        try {
            const results = await Reward.find({
                category: { $all: [category] },
                availability: { $in: fmtAvail },
            })
                .skip(skips)
                .limit(pageSize)
                .exec();

            return res(results);
        } catch (err) {
            return rej(err);
        }
    });
};

export const getCodeForReward = async (query) => {
    return new Promise(async (res, rej) => {
        try {
            const result = await Reward.findOne(query);

            return res("UNIQUECODE");
        } catch (err) {
            return rej(err);
        }
    });
};

export const setUserPoints = async (userId, rewardCost) => {
    const parsedId = JSON.parse(userId);
    return new Promise(async (res, rej) => {
        try {
            const currentPoints = await User.findOne({ _id: parsedId }, {"points": 1, _id: 0});
 
            if (!userId || !rewardCost) {
                return rej(new Error("Id and/or cost is undefined"))
            }

            if(rewardCost > currentPoints.points) {
                return res(false);
            } else {
                const updatedUserData = await User.findOneAndUpdate(
                    { _id: parsedId },
                    { $inc: { "points": -rewardCost} },
                    { new: true }
                );
                
                return res(updatedUserData);
            };
        } catch (err) {
            return rej(err);
        };
    });
};

// Add reward id to reward array in user collection
export const addReward = async (userId, rewardId) => {
    const parsedUserId = JSON.parse(userId);

    return new Promise(async (res, rej) => {
        try {
            const updatedUserData = await User.findOneAndUpdate(
                { _id: parsedUserId },
                { $push: { "rewards": rewardId} },
                { new: true }
            );
            
            return res(updatedUserData);
        } catch (err) {
            return rej(err);
        };
    });
};

// Get rewards array from user collection 
export const getRewardsArr = async (userId) => {
    return new Promise(async (res, rej) => {
        try {
            const rewardsArr = await User.findById(userId, "rewards");
            return res(rewardsArr.rewards);
        } catch (err) {
            return rej(err);
        };
    });
};