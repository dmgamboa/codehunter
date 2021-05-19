import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const getProfileData = async (user) => {
    const profileData = await axios.get(`${url}getProfileData`, {
        params: {
            user: user,
        },
    });

    return profileData;
};

export { getProfileData };
