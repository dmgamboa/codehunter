import axios from "axios";

// Utility
import firstLast from "../../../util/firstLastWords.js";

const url = process.env.REACT_APP_SERVER;

// Send POST request
const createUserDoc = (values, uid) => {
    const { firstName, lastName } = firstLast(values.fullname);

    const regiInfo = {
        "name" : {
            "first": firstName,
            "last": lastName
        },
        "email": values.email, 
        "username": values.username,
        "uid": uid
    };

    axios.post(`${url}registration`, regiInfo);
};

export default createUserDoc;
