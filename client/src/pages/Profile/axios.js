import axios from "axios";

const url = process.env.REACT_APP_SERVER;

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

export { readHistory, updateUser };
