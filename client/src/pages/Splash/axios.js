import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const readUserContext = async (userToken) => {
    const userContext = await axios.get(`${url}readUser`, {
        params: {
            userToken,
            fields: "avatar points name",
        },
    });

    return userContext.data;
};

export { readUserContext };
