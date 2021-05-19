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
    return await axios
        .get(`${url}getPlaceData`, {
            params: {
                search: search,
            },
        })
        .then((res) => {
            const { status, data } = res;
            const dayArr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

            if (status === 200) {
                let days = {};
                const { hours } = data;

                dayArr.forEach(day => {
                    const period = hours && hours[dayArr.indexOf(day)];
                    days[day] = [period?.open?.time, period?.close?.time]; 
                });

                return {
                    hours: hours && {
                        status: data.open_now ? "Open Now" : "Closed",
                        days
                    },
                    image: data.photoURL,
                    phone: data.phoneNumber
                };
            }
        });
};

const getLocationsList = async (params) => {
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
                        address,
                        geom
                    } = fields;

                    return {
                        name: cultural_space_name,
                        type,
                        local_area,
                        website,
                        address,
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
