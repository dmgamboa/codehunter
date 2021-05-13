import axios from "axios";
import config from "../config/index.js";

const googleMapsKey = config.googleMapsKey;
const maxHeight = 600;

const getPlace = (data) => {
    return new Promise(async (res, rej) => {
        var search = data.query.search;
        
        // Replace spaces with + for the URL.
        search = search.replace(/ /g, "+");

        const placeSearch = await axios.get(
            `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${googleMapsKey}&input=${search}&inputtype=textquery`
            );
        
        const placeID = placeSearch.data.candidates[0].place_id;

        const placeDetails = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?key=${googleMapsKey}&placeid=${placeID}`
            );

        const placeData = placeDetails.data.result;
        
        var photoReference;
        if (placeData.photos) {
            photoReference = placeData.photos[0].photo_reference;
        }

        var placePhoto;
        if (photoReference) {
            placePhoto = await axios.get(
                `https://maps.googleapis.com/maps/api/place/photo?key=${googleMapsKey}&photoreference=${photoReference}&maxheight=${maxHeight}`
                );
        }

        const dataToReturn = {};
        if (placePhoto) {
            dataToReturn["photoURL"] = placePhoto.request.res.responseUrl;
        }
        if (placeData.opening_hours) {
            dataToReturn["hours"] = placeData.opening_hours.weekday_text;
        }
        dataToReturn["phoneNumber"] = placeData.international_phone_number;

        return res(dataToReturn);
    });
};

export { getPlace };
