import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const readHistory = async (userToken) => {
<<<<<<< HEAD
    const userData = await axios.get(`${url}readHistory`, {
        params: {
            userToken: userToken,
            userFields: "history"
        },
    });

    return userData.data;
=======
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
>>>>>>> 6ea7089cd23bf509fa401d3443f35c5f2a5c5a45
};

const updateUser = async (data) => {
    const updatedUser = await axios.post(`${url}updateUser`, data);

    localStorage.setItem("userData", JSON.stringify(updatedUser.data));
};

export { readHistory, updateUser };
