import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const readHistory = async (userToken) => {
    const userData = await axios.get(`${url}readHistory`, {
        params: {
            userToken: userToken,
            fields: "history"
        },
    });

    return userData.data;
};

const updateUser = async (data) => {
    const updatedUser = await axios.post(`${url}updateUser`, data);

    localStorage.setItem("userData", JSON.stringify(updatedUser.data));
};

export { readHistory, updateUser};
