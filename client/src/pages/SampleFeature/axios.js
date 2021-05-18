//const BASE_URL = "";

import axios from "axios";

export function sampleGet() {
    // send a GET request
    axios.get("/sampleGet");
};

export function samplePost() {
    
    // send a POST request
    axios.post("/samplePost", {
        firstName: "Finn",
        lastName: "Williams"
    });
};
