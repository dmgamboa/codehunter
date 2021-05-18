import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const validateCodeAndEarnPoints = async (locationID, user) => {
    const params = {
        locationID: locationID,
        user: user,
    };

    await axios.post(`${url}validateCodeAndEarnPoints`, params);
};

export { validateCodeAndEarnPoints };