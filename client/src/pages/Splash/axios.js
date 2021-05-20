import axios from "axios";

const url = process.env.REACT_APP_SERVER;

export const getUserPoints = async (user) => {
    return await axios
        .get(`${url}getUserPoints`, {
            params: {
                user,
            },
        })
        .then((res) => {
            const { data } = res;
            return data;
        });
};
