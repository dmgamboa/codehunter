import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const readFriends = async (params) => {
    const friends = await axios.get(`${url}readUser`, {
        params,
    });

    console.log(friends.data);

    return friends.data.friends;
};

export { readFriends };
