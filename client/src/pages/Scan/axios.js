import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const validateCodeAndEarnPoints = async (locationID, userUID) => {
    const ids = {
        locationID: locationID,
        userUID: userUID,
    };

    await axios.post(`${url}validateCodeAndEarnPoints`, ids);
};

export { validateCodeAndEarnPoints };
