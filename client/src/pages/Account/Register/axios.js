import axios from "axios";

// Utility
import firstLast from "../../../util/firstLastWords.js";

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

    axios.post("/registration", regiInfo)
    .then(res => { 
        console.log(res); 
    }).catch(e => {
        console.log(e);
    });
};

export default createUserDoc;