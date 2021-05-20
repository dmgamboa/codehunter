
import { Reward } from "./schema.js" 

export const massWriteRewards = async (documents) => {
        return new Promise((res, rej) => {
            if(documents.length <= 0 ) {
                return rej("No documents passed into parameter");
            }
            Reward.collection.drop();
            Reward.insertMany(documents, { upsert: true })
            .then(() => {
                return res("data created in rewards collection");
            }).catch(err => {
                return rej(err);
            });

        })
};
