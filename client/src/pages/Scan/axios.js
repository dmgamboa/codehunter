import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const validateCodeAndEarnPoints = async (locationID, userToken) => {
    const params = {
        locationID: locationID,
        userToken: userToken,
    };

    const newPoints = await axios.post(`${url}validateCodeAndEarnPoints`, params);
    return newPoints;
};

export { validateCodeAndEarnPoints };
