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