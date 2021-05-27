import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const readFriend = async (_id) => {
    const friend = await axios.get(`${url}readUser`, {
        params: {
            _id,
            fields: "avatar name points",
        },
    });

    return friend.data;
};

const readFriendHistory = async (_id) => {
    return await axios
        .get(`${url}readHistory`, {
            params: {
                _id,
                userFields: "history",
                fields: "uid",
            },
        })
        .then((res) => {
            const { data, status } = res;
            if (status === 200) {
                const { history } = data;
                return history;
            }
        });
};

const readHistory = async (userToken) => {
    return await axios
        .get(`${url}readHistory`, {
            params: {
                userToken: userToken,
                fields: "history"
            }
        })
        .then((res) => {
            const { data, status } = res;
            if (status === 200) {
                const { history } = data;
                return history;
            }
        });
};

const updateUser = async (data) => {
    const updatedUser = await axios.post(`${url}updateUser`, data);

    localStorage.setItem("userData", JSON.stringify(updatedUser.data));
};

export { readFriend, readFriendHistory, readHistory, updateUser };
