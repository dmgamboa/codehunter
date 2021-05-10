import axios from "axios";

// Send POST request
const createUserDoc = (values, uid) => {
    const regiInfo = {
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
};

export default createUserDoc;
