//const BASE_URL = "";

import axios from "axios";

export function sampleGet() {
    console.log("in client-side sampleGet");

    // send a GET request
    axios.get("/sampleGet").then((res) => {
        console.log(res.data);
    });
}

export function samplePost() {
    console.log("in client-side samplePost");

    // send a POST request
    axios
        .post("/samplePost", {
            firstName: "Finn",
            lastName: "Williams",
        })
        .then(
            (res) => {
                console.log(res.data);
            },
            (error) => {
                console.log(error);
            }
        );
}
