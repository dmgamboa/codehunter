import axios from "axios";

const url = process.env.REACT_APP_SERVER;

export const getRewards = async (query) => {
    const results = await axios.get(`${url}rewards/getRewards`, { params: query });
    const resultsData = results.data;
    return resultsData;
};

export const getCodeForReward = async (query) => {
    const code = await axios.get(`${url}rewards/getCodeForReward`, { params: query });

    const codeData = code.data;
    return codeData;
};

export const setUserPoints = async (query) => {
    // Returns update user data with updated points
    const result = await axios.post(`${url}rewards/setUserPoints`, query).catch((err) => {
        throw new Error(err);
    });
    return result.data;
};

export const addReward = async (query) => {
    if (!query.rewardId) {
        return false;
    }
    return await axios.post(`${url}rewards/addReward`, query).catch((err) => {
        throw new Error(err);
    });
};

export const getRewardsArr = async (userToken) => {
    const results = await axios.get(`${url}readUser`, {
        params: {
            userToken,
            fields: "rewards",
        },
    });

    return results.data.rewards;
};
