import axios from "axios";

const getMapData = async () => {
    var mapData;

    await axios.get("/getMapData").then((res) => {
        mapData = res;
    });
    return mapData;
};

const getPlaceData = async (search) => {
    var placeData;
    await axios
        .get("/getPlaceData", {
            params: {
                search: search,
            },
        })
        .then((res) => {
            placeData = res;
        });
    return placeData;
};

const getLocationsList = async (params) => {
    /*const params = {
        userCoords: userCoords,
        page: page,
        limit: limit,
        bookmarked: bookmarked,
        visited: visited,
        local_area: local_area,
        type: type,
    };*/
    let locationsList;

    await axios
    .get("/getLocationsList", { params })
    .then((res) => {
        locationsList = res;
    });

    return locationsList;
};

export { getMapData, getPlaceData, getLocationsList };
