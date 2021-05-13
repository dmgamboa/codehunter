import axios from "axios";
import config from "../config/index.js";

const googleMapsKey = config.googleMapsKey;

const getPlace = (data) => {
    return new Promise(async (res, rej) => {
        var query = data.query.query;
        // Replace spaces with + for the URL.
        query = query.replace(/ /g, "+");
        
        const placeSearch = await axios.get(
            `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${googleMapsKey}&input=${query}&inputtype=textquery`
            );
        
        const placeID = placeSearch.data.candidates[0].place_id;

        const placeDetails = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?key=${googleMapsKey}&placeid=${placeID}`
            );
            
        const hours = placeDetails.data.result.opening_hours;

        return res(hours);
    });
};

export default getPlace;
