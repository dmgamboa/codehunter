
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


export const getRewards = (category, pageNumber, pageSize = 8) => {
    return new Promise(async (res, rej) => {
        const skips = pageSize * (pageNumber - 1);
        if (category === "all") {
            try {
                const results = await Reward.find().skip(skips).limit(pageSize);
                return res(results);
            } catch (err) {
                return rej(err);
            }
        };
        // Calculate number of documents to skip
        console.log("skips: ", skips);
        console.log("pgnum: ", pageNumber);
        console.log("pgsize: ", pageSize);
        try {
            const results = await Reward.find({ category: {$all: [category]}}).skip(skips).limit(pageSize).exec();
            return res(results);
        } catch (err) {
            return rej(err);
        }      
    });
    
};