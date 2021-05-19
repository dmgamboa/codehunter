import axios from "axios";

// Utility
import firstLast from "../../util/firstLastWords.js";

const url = process.env.REACT_APP_SERVER;

// Send POST request
const createUserDoc = async (values, uid) => {
    const { firstName, lastName } = firstLast(values.fullname);
    const regiInfo = {
        name: {
            first: firstName,
            last: lastName,
        },
        email: values.email,
        username: values.username,
        uid: uid,
    };

    const initialPoints = await axios.post(`${url}registration`, regiInfo);
    const initialPointsData = initialPoints.data;

    return initialPointsData;
};

const getUserPoints = async (user) => {
    const userPoints = await axios.get(`${url}getUserPoints`, {
        params: {
            user: user,
        },
    });
    return userPoints;
};

export { createUserDoc, getUserPoints };
