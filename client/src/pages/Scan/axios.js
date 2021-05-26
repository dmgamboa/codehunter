import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const handleCodeScan = async (locationID, userToken, date) => {
    const params = {
        locationID,
        userToken,
        date,
    };

    const newData = await axios.post(`${url}handleCodeScan`, params);

    if (newData.data) {
        localStorage.setItem("userData", JSON.stringify(newData.data));
    }
};

export { handleCodeScan };
