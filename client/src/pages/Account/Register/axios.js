import axios from "axios";

// Utility
import firstLast from "../../../util/firstLastWords.js";

const url = process.env.REACT_APP_SERVER;

// Send POST request
const createUserDoc = (values, uid) => {
    const { firstName, lastName } = firstLast(values.fullname);

    const regiInfo = {
<<<<<<< HEAD
        fullName: values.fullname,
        email: values.email,
        userName: values.username,
        userUID: uid,
    };

    axios
        .post("/registration", regiInfo)
        .then((res) => {
            console.log(res);
        })
        .catch((e) => {
            console.log(e);
        });
=======
        "name" : {
            "first": firstName,
            "last": lastName
        },
        "email": values.email, 
        "username": values.username,
        "uid": uid
    };

    axios.post(`${url}registration`, regiInfo);
>>>>>>> 07e7eb60c287a6dae2656b1b15c874ad1b778f55
};

export default createUserDoc;
