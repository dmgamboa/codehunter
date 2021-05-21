import axios from "axios";

const url = process.env.REACT_APP_SERVER;

export const getRewards = async (query) => {
    const results = await axios.get(`${url}rewards/getRewards`, { params: query});
    const resultsData = results.data;
    return resultsData;
};
