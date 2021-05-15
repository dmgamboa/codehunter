import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const getMapData = async () => {
    var mapData;

    await axios.get(`${url}getMapData`).then((res) => {
        mapData = res;
    });
    return mapData;
};

const getPlaceData = async (search) => {
    let placeData;
    await axios
        .get(`${url}getPlaceData`, {
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
    console.log(url);
    return await axios
        .get(`${url}getLocationsList`, { params })
        .then((res) => {
            const { status, data } = res;

            if (status === 200) {
                return data.map(({ fields, distanceInKm }) => {
                    const {
                        local_area,
                        type,
                        cultural_space_name,
                        website,
                        geom
                    } = fields;

                    return {
                        name: cultural_space_name,
                        type,
                        local_area,
                        website,
                        distance: distanceInKm && Math.round(distanceInKm),
                        coordinates: {
                            lng: geom?.coordinates?.[0],
                            lat: geom?.coordinates?.[1]
                        }
                    };
                });
            }
        });
};

export { getMapData, getPlaceData, getLocationsList };
