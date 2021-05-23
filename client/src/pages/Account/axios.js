import axios from "axios";

// Utility
import firstLast from "../../util/firstLastWords.js";

const url = process.env.REACT_APP_SERVER;

const createUser = async (values, userToken) => {
    const { firstName, lastName } = firstLast(values.fullname);
    const regiInfo = {
        userInfo: {
            name: {
                first: firstName,
                last: lastName,
            },
            email: values.email,
            username: values.username,
        },
        userToken,
    };

    const userData = await axios.post(`${url}createUser`, regiInfo);

    localStorage.setItem("userData", JSON.stringify(userData.data));
};

export { createUser };
