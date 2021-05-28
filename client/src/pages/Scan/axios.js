import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const handleCodeScan = async (locationID, userToken, date, userData) => {
    const params = {
        locationID,
        userToken,
        date,
    };

    const locationData = await axios.post(`${url}handleCodeScan`, params);

    if (locationData.data?.points) {
        userData.points += locationData.data.points;
        localStorage.setItem("userData", JSON.stringify(userData));
    }
};

export { handleCodeScan };
