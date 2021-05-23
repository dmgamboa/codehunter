import { Reward } from "./schema.js";

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
        }

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
