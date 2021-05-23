import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const readUser = async (userToken) => {
    const user = await axios.get(`${url}readUser`, {
        params: {
            userToken: userToken,
        },
    });

    return user.data;
};

const updateUser = async (data) => {
    const updatedUser = await axios.post(`${url}updateUser`, data);

    localStorage.setItem("userData", JSON.stringify(updatedUser.data));
};

export { readUser, updateUser};
