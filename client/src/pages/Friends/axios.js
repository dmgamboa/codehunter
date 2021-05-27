import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const readFriends = async (params) => {
    const friends = await axios.get(`${url}readUser`, {
        params,
    });

    return friends.data.friends;
};

const readUsers = async (params) => {
    const users = await axios.get(`${url}readUsers`, {
        params,
    });
    
    return users.data;
};

export { readFriends, readUsers };
