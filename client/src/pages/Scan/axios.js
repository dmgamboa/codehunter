import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const handleCodeScan = async (locationID, userToken) => {
    const params = {
        locationID: locationID,
        userToken: userToken,
    };

    const newData = await axios.post(`${url}handleCodeScan`, params);
    return newData.data;
};

export { handleCodeScan };
