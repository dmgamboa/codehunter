import axios from "axios";

const getMapData = async () => {
    var mapData;

    await axios.get("/getMapData").then((res) => {
        mapData = res;
    });
    return mapData;
};

const getPlaceData = async (query) => {
    var placeData;
    await axios
        .get("/getPlaceData", {
            params: {
                query: query,
            },
        })
        .then((res) => {
            placeData = res;
        });
    return placeData;
};

export { getMapData, getPlaceData };
