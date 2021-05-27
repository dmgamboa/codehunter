import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const readUsers = async (params) => {
    const users = await axios.get(`${url}readUsers`, {
        params,
    });
    
    return users.data;
};

const updateUser = async (params) => {
    await axios.get(`${url}updateUser`, {
        params,
    });
};

export { readUsers, updateUser };
